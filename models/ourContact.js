const mongoose = require('mongoose')

const ourContactSchema = new mongoose.Schema({
    phone:{
        type:String,
        required:[true, "Telefon nomerini kiriting"],
        trim:true,
        minlength:6,
        maxlength:1000
    },
    email:{
        type:String,
        required:[true, "Emailni kiriting"],
        unique:[true, "Bunaqa pochta oldin kiritilgan"],
        trim:true,
        minlength:6,
        maxlength:1000
    },
    map:{
        type:String,
        required:[true, "Iltimos kordinatani kiriting"],
        trim:true,
        minlength:30,
        maxlength:1000
    }
},{
    timestamps:true
})

module.exports = mongoose.model("OurContact", ourContactSchema)