const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String
    },
    logo: {
        type: String
    },
    website: {
        type: String
    },


}, { timestamps: true }
)
module.exports = mongoose.model("companies", companySchema)