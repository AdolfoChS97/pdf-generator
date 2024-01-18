const express = require('express')
const router = express.Router()
const { generatesPDF } = require('./controller/index')

router.post('/', async (req, res) => {
    return await generatesPDF(req, res)
})

module.exports = router