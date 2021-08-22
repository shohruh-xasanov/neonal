const Doctor = require('../models/doctar')
const {sharpFile} = require('../fileUpload/sharp')

const drControllers = {
    createDr : async (req,res)=>{
        try {
            const files = sharpFile(req.file.filename, 265, 363)
            const {fullname,serviceID,fb,tw,go,title} = req.body
            const doctor = new Doctor({fullname,serviceID,title,links:{fb,tw,go},image:files,})
            await doctor.save()
            res.status(201).json({doctor})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = drControllers