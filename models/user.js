const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Ismingizni kiriting"],
        trim:true,
        minlength:6,
        maxlength:1000
    },
    email:{
        type:String,
        required:[true, "Emailingizni kiriting"],
        unique:[true, "Bu email oldin kiritlgan"],
        trim:true,
        minlength:6,
        maxlength:1000
    },
    password:{
        type:String,
        required:[true, "Iltimos parolni kiriting"],
        trim:true,
        minlength:30,
        maxlength:1000
    }
},{
    timestamps:true
})

module.exports = mongoose.model("User", userSchema)