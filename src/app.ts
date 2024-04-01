import express from 'express'
import { setBookRoutes } from './routes/bookRoutes'
import { config } from 'dotenv'

config()

const app = express()
const port = 3000

// Middleware
app.use(express.json())

// Initialize routes
setBookRoutes(app)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
