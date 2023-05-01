const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpringSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    rating: {type: Number, required: true},
    entrance_fee: { type: String, required: true },
    hours: {
         monday: { type: String, required: true },
         tuesday: { type: String, required: true },
         wednesday: { type: String, required: true },
         thursday: { type: String, required: true },
         friday: { type: String, required: true },
         saturday: { type: String, required: true },
         sunday: { type: String, required: true },
    }
})

const Spring = mongoose.model('Spring', SpringSchema)
module.exports = Spring
