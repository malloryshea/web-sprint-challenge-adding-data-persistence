// build your `/api/tasks` router here
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('task endpoint is working')
})

module.exports = router; 