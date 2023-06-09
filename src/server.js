require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')

// Set App Variable
const app = express()

// Use Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    const now = new Date().toString()
    console.log(`Requested ${req.url} at ${now}`)
    next()
})

// Database Setup
require('./config/db-setup.js');

//Middleware
const checkAuth = require('./middleware/checkAuth');

// Routes
const router = require('./routes/index.js');
app.use(router);
app.use(checkAuth);

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Florida Springs API listening on port ${process.env.PORT}!`)
})

module.exports = app