const express = require('express')

const router = express.Router()

router.use('/format', require('./apiRouter'))

module.exports = router
