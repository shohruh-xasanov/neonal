const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
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
        trim:true,
        minlength:6,
        maxlength:1000
    },
    comment:{
        type:String,
        required:[true, "Iltimos habar yozing"],
        trim:true,
        minlength:30,
        maxlength:10000
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Comment", commentSchema)