const Blog = require('../models/blog')
const upload = require('../fileUpload/fileUpload')

const blogControllers = {
    createBlog : async (req,res)=>{
        try {
            const {title,description} = req.body
            console.log(req.file)
            const blog = new Blog({title,description, image:req.file.filename})
            await blog.save()
            res.status(201).json({blog})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
}

module.exports = blogControllers