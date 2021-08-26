const About = require('../models/about')
const {sharpFile} = require('../fileUpload/sharp')

const aboutControllers = {
    createAbout : async (req,res)=>{
        try {
            const files = sharpFile(req.file.filename, 1920, 920)
            const {title,description} = req.body
            const about = new About({title,description, image:files})
            await about.save()
            res.status(201).json({about})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = aboutControllers