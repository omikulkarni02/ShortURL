const mongoose = require('mongoose')
const shortId = require('shortid')

const shortURLSchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     required: true,
    // },
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },

})

module.exports = mongoose.model('ShortURL', shortURLSchema)