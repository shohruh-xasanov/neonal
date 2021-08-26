const Banner = require('../models/banner')
const {sharpFile} = require('../fileUpload/sharp')

const bannerControllers = {
    createBanner : async (req,res)=>{
        try {
            const image = req.files.image[0].filename
            const file = req.files.file[0].filename
            const files = sharpFile(image, 1170, 600)
            const {title} = req.body
            const banner = new Banner({title, file:`/public/uploads/video/${file}`, image:files,})
            await banner.save()
            res.status(201).json({banner})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = bannerControllers