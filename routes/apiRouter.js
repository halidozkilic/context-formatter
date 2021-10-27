const express = require('express')
const router = express.Router()

const { format } = require('../controllers/apiController')
const { Validate } = require('../middleware/validation')

router.post('/', Validate(), format)

module.exports = router
