const Blog = require('../models/blog')
const {sharpFile} = require('../fileUpload/sharp')
const OurContact = require('../models/ourContact')

const blogControllers = {
    createBlog : async (req,res)=>{
        try {
            const files = sharpFile(req.file.filename, 800, 450)
            const {title,description} = req.body
            const blog = new Blog({title,description, image:files})
            await blog.save()
            res.status(201).json({blog})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    getAll : async (req,res)=>{
        const blog = await Blog.find()
        const ourContact = await OurContact.find()
        res.render('blog',{
            blog, ourContact
        })
    }
}

module.exports = blogControllers