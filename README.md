# My Book App

This is a CRUD application built with Express and MySQL for managing books.

## Project Structure

```
my-book-app
├── src
│   ├── app.ts
│   ├── controllers
│   │   └── bookController.ts
│   ├── models
│   │   └── bookModel.ts
│   ├── routes
│   │   └── bookRoutes.ts
│   └── db
│       └── connection.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Files

### `src/app.ts`

This file is the entry point of the application. It creates an instance of the express app, sets up middleware, and initializes the routes.

### `src/controllers/bookController.ts`

This file exports a class `BookController` which handles the CRUD operations for books. It has methods such as `getBooks`, `getBook`, `createBook`, `updateBook`, and `deleteBook`.

### `src/models/bookModel.ts`

This file exports a class `BookModel` which represents the book entity. It defines the properties of a book and provides methods to interact with the database.

### `src/routes/bookRoutes.ts`

This file exports a function `setBookRoutes` which sets up the routes for the book-related endpoints. It uses the `BookController` to handle the requests.

### `src/db/connection.ts`

This file exports a function `createConnection` which establishes a connection to the MySQL database.

### `tsconfig.json`

This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.

### `package.json`

This file is the configuration file for npm. It lists the dependencies and scripts for the project.

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Set up the MySQL database and update the connection details in `src/db/connection.ts`.
4. Start the application using `npm start`.

## API Endpoints

-   `GET /books`: Get all books.
-   `GET /books/:id`: Get a book by ID.
-   `POST /books`: Create a new book.
-   `PUT /books/:id`: Update a book by ID.
-   `DELETE /books/:id`: Delete a book by ID.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
