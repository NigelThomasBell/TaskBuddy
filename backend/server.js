require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/tasks')

const app = express()

// Register global middleware
app.use(express.json())
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

// React to requests via routes
app.use('/api/tasks', taskRoutes)

// Connect to DB
mongoose.connect(
    process.env.MONGO_URI
).then(
    () => {
        // Listen to port for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB & listening for requests on port", process.env.PORT)
        })
    }
).catch(
    (error) => {
        console.log(error)
    }
)
