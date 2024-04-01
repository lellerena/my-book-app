import { Request, Response } from 'express'
import { BookModel } from '../model/bookModel'
import * as z from 'zod'
import {
    bookSchema,
    emptyExample,
    bookUpdateSchema
} from '../schemas/booksShemas'

export class BookController {
    public async getBooks(req: Request, res: Response) {
        // Logic to fetch all books from the database
        // and send the response
        const model = new BookModel()
        const books = await model.getBooks()
        console.log(books)
        res.json({ mesagge: 'Succes', data: books })
    }

    public async getBook(req: Request, res: Response) {
        // Logic to fetch a specific book from the database
        // based on the provided book ID and send the response
        const model = new BookModel()
        const id = req.params.id
        console.log(id)
        // @ts-ignore
        const book = await model.getBook(id)

        res.json({
            message: 'succes',
            data: book
        })
    }

    public async createBook(req: Request, res: Response) {
        // Logic to create a new book in the database
        // based on the provided book data and send the response
        const data = bookSchema.safeParse({ ...emptyExample, ...req.body })
        if (data.success === false) {
            const errorMessages = data.error.issues.map(
                (issue) => issue.message
            )

            return res.status(400).json({
                message: 'Se produjo un error al validar los datos',
                error: true,
                data: errorMessages
            })
        }

        const model = new BookModel()
        try {
            const book = await model.createBook(data.data)

            res.json({
                message: 'Succes',
                data: book
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error al crear el libro',
                error: true,
                data: error
            })
        }
    }

    public async updateBook(req: Request, res: Response) {
        // Logic to update a specific book in the database
        // based on the provided book ID and updated data
        // and send the response
        const id = req.params.id
        const data = bookUpdateSchema.safeParse(req.body)
        if (data.success === false) {
            const errorMessages = data.error.issues.map(
                (issue) => issue.message
            )

            return res.status(400).json({
                message: 'Se produjo un error al validar los datos',
                error: true,
                data: errorMessages
            })
        }

        const model = new BookModel()
        try {
            // @ts-ignore
            const book = await model.updateBook(id, data.data)
            res.json({
                message: 'Succes',
                data: book
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error al actualizar el libro',
                error: true,
                data: error
            })
        }
    }

    public async deleteBook(req: Request, res: Response) {
        // Logic to delete a specific book from the database
        // based on the provided book ID and send the response
        const id = req.params.id
        const model = new BookModel()
        try {
            // @ts-ignore
            await model.deleteBook(id)
            res.json({
                message: 'Success',
                data: null
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error deleting the book',
                error: true,
                data: error
            })
        }
    }
}
