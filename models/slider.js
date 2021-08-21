const mongoose = require('mongoose')

const sliderSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true,
        minlength:5,
        maxlength:1000
    },
    description:{
        type:String,
        required:true,
        trim: true,
        minlength:5,
        maxlength:1000
    },
    image:{
        type: String,
        required:true
    }

},{
    timestamps:true
})

module.exports = mongoose.model("Slider", sliderSchema)