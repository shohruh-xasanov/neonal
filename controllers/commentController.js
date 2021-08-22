const Comment = require('../models/comment')

const commentControllers = {
    createComment : async (req,res)=>{
        try {
            const {name,email,comment} = req.body
            const comment = new Comment({name,email,comment})
            await comment.save()
            res.status(201).json({comment})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = commentControllers