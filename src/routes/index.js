const express = require('express')
const springRoutes = require('./spring.js')

const router = express.Router()

router.use('/springs', springRoutes)


module.exports = router