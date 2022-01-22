// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resourceList = await Resources.getResources()
        res.status(200).json(resourceList)
    } catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resources.createResource(req.body)
        res.status(201).json(newResource)
    } catch(err){
        next(err)
    }
})

module.exports = router;