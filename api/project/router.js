// build your `/api/projects` router here
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('project endpoint is working')
})

module.exports = router;
