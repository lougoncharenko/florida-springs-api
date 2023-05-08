const express = require('express')
const springRoutes = require('./spring.js')
const authRoutes = require('./auth.js')
const userRoutes = require('./user.js')

const router = express.Router()

router.use('/springs', springRoutes)
router.use('/auth', authRoutes)
router.use('/user', userRoutes)


module.exports = router