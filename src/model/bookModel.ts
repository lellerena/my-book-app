import { createConnection } from '../db/connection'

export class BookModel {
    private connection: any

    constructor() {
        this.connection = createConnection()
    }

    public async getBooks() {
        // Code to fetch all libros from the database
        const query = 'SELECT * FROM libros'
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err: any, results: any) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        })
    }

    public getBook(id: number) {
        // Code to fetch a specific book from the database
        const query = 'SELECT * FROM libros WHERE id = ?'
        return new Promise((resolve, reject) => {
            this.connection.query(query, [id], (err: any, results: any) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results[0])
                }
            })
        })
    }

    public createBook(book: any) {
        // Code to create a new book in the database
        const query = 'INSERT INTO libros SET ?'
        return new Promise((resolve, reject) => {
            this.connection.query(query, book, (err: any, results: any) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        })
    }

    public updateBook(id: number, book: any) {
        // Code to update a book in the database
        const query = 'UPDATE libros SET ? WHERE id = ?'
        return new Promise((resolve, reject) => {
            this.connection.query(
                query,
                [book, id],
                (err: any, results: any) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    public deleteBook(id: number) {
        // Code to delete a book from the database
        const query = 'DELETE FROM libros WHERE id = ?'
        return new Promise((resolve, reject) => {
            this.connection.query(query, [id], (err: any, results: any) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        })
    }
}
