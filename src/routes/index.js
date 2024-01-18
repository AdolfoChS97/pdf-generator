const express = require('express')
const router = express.Router()

router.use('/pdf', require('../modules/pdf'))

module.exports = router