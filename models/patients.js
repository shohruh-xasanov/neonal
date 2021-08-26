const mongoose = require('mongoose')

const patientsSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true, "Ism va familyani kiriting"],
        trim:true,
        minlength:6,
        maxlength:1000
    },
    jobs:{
        type:String,
        trim:true,
        required:true
    },
    title:{
        type:String,
        required:[true, "Tavsifni kiriting"],
        trim:true,
        minlength:6,
        maxlength:1000
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Patients", patientsSchema)