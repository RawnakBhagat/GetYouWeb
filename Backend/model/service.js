const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },

})

const service = mongoose.model('service',serviceSchema)

module.exports = service