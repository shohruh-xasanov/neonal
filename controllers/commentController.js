const Comment = require('../models/comment')

const commentControllers = {
    createComment : async (req,res)=>{
        try {
            const {name,email,comment} = req.body
            const commit = new Comment({name,email,comment})
            await commit.save()
            res.status(201).json({commit})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = commentControllers