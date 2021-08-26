const Patients = require('../models/doctar')
const {sharpFile} = require('../fileUpload/sharp')

const ptControllers = {
    createPt : async (req,res)=>{
        try {
            const files = sharpFile(req.file.filename, 72, 72)
            const {fullname,serviceID,fb,tw,go,title} = req.body
            const patients = new Patients({fullname,serviceID,title,links:{fb,tw,go},image:files,})
            await patients.save()
            res.status(201).json({patients})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = ptControllers