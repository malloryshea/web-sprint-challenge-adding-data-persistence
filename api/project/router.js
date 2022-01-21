// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projectList = await Projects.getProjects()
        res.status(200).json(projectList)
    } catch(err){
        next(err)
    }
})

module.exports = router;
