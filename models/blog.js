const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
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
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Blog", blogSchema)