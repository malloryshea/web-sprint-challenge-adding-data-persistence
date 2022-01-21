// build your `/api/resources` router here
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('resource endpoint is working')
})

module.exports = router; 