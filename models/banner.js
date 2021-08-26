const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true,
        minlength:5,
        maxlength:1000
    },
    file:{
        type:String,
        required:false
    },
    image:{
        type:String,
        required:false
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Banner", bannerSchema)