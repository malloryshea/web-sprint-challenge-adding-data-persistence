// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const taskList = await Tasks.getTasks()
        res.status(200).json(taskList)
    } catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newTask = await Tasks.createTask(req.body)
        res.status(201).json(newTask)
    } catch (err) {
        next(err)
    }      
})

module.exports = router;