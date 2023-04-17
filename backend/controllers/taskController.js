const Task = require('../models/taskModel')
const mongoose = require('mongoose')

// Get all tasks
const getTasks = async (request, response) => {
    const tasks = await Task.find({}).sort({createdAt: -1})
    response.status(200).json(tasks)
}

// Get a single task
const getTask = async (request, response) => {
    const { id } = request.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return response.status(404).json({
            error: "No such task found"
        })
    }
    const task = await Task.findById(id)
    if (!task){
        return response.status(404).json({
            error: "No such task found"
        })
    }
    response.status(200).json(task)
}

// Create new task
const createTask = async (request, response) => {
    const {title, description} = request.body
    let emptyFields = []
    if (!title){
        emptyFields.push('title')   
    }
    if (!description){
        emptyFields.push('description')   
    }
    if (emptyFields.length > 0){
        return response.status(400).json({ 
            error: "Please fill in all the fields", 
            emptyFields 
        })
    }
    try {
        const task = await Task.create({title, description})
        response.status(200).json(task)
    } catch (error) {
        response.status(400).json({
            error: error.message
        }) 
    }
}

// Delete a task
const deleteTask = async (request, response) => {
    const { id } = request.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return response.status(404).json({
            error: "No such task found"
        })
    }
    const task = await Task.findOneAndDelete(
        {_id: id}
    )
    if (!task){
        return response.status(404).json({
            error: "No such task found"
        })
    }
    response.status(200).json(task)
}

// Update a task
const updateTask = async (request, response) => {
    const { id } = request.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return response.status(404).json({
            error: "No such task found"
        })
    }
    const task = await Task.findOneAndUpdate(
        {_id: id},
        {...request.body}
    )
    if (!task){
        return response.status(404).json({
            error: "No such task found"
        })
    }
    response.status(200).json(task)
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}