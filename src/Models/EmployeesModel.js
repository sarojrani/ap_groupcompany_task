const mongoose = require('mongoose')

const EmployeSchema = new mongoose.Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    Company:{
      type:String
    },
    email: {
        type: String
    },
    password:{
        type:String
    },
    phone: {
        type: String
    },
   
}, { timestamps: true }
)
module.exports = mongoose.model("employees", EmployeSchema)