const User = require('../models/user')

const userControllers = {
    createUser : async (req,res)=>{
        try {
            const {name,password,email} = req.body
            const user = new User({name,password,email})
            await user.save()
            res.status(201).json({user})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = userControllers