const express = require('express')
const router = express.Router();
const airPlaneRoutes = require('./airplane')

router.use('/airplane',airPlaneRoutes)

module.exports = router;
