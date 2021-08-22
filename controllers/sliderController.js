const Slider = require('../models/slider')
const {sharpFile} = require('../fileUpload/sharp')

const sliderControllers = {
    createSlider : async (req,res)=>{
        try {
            const files = sharpFile(req.file.filename, 649, 939)
            const {title,description} = req.body
            const slider = new Slider({title,description, image:files})
            await slider.save()
            res.status(201).json({slider})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = sliderControllers