const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true, "Ism va familyani kiriting"],
        trim:true,
        minlength:6,
        maxlength:1000
    },
    serviceID:{
        type:mongoose.Schema.ObjectId,
        ref:'Service',
        required:true
    },
    title:{
        type:String,
        required:[true, "Tavsifni kiriting"],
        trim:true,
        minlength:6,
        maxlength:1000
    },
    links:{
        fb:{String},
        tw:{String},
        go:{String},
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

module.exports = mongoose.model("Doctor", doctorSchema)