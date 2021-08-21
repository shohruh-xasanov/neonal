const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
        maxlength:1000
    },
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
        maxlength:1000
    },
    description:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
        maxlength:10000
    },
    tag:[{
        type:String,
        required:true
    }],
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Service", serviceSchema)