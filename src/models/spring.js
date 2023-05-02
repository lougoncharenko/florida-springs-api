const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpringSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    rating: {type: Number, required: true},
    entrance_fee: { type: String, required: true },
})

const Spring = mongoose.model('Spring', SpringSchema)
module.exports = Spring
