const express = require('express')
const springRoutes = require('./spring.js')
const authRoutes = require('./user.js')

const router = express.Router()

router.use('/springs', springRoutes)
router.use('auth', authRoutes)


module.exports = router