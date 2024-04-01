import express from 'express'
import { BookController } from '../controllers/bookController'

export function setBookRoutes(app: express.Application): void {
    const bookController = new BookController()

    app.get('/books', bookController.getBooks)
    app.get('/books/:id', bookController.getBook)
    app.post('/books', bookController.createBook)
    app.put('/books/:id', bookController.updateBook)
    app.delete('/books/:id', bookController.deleteBook)
}
