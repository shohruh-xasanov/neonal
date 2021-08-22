const Service = require('../models/service')
const {sharpFile} = require('../fileUpload/sharp')

const serviceController = {
    createService : async (req,res)=>{
        try {
            const files = sharpFile(req.file.filename, 1170, 600)
            const {name, title,tag,description} = req.body
            const service = new Service({name,title,tag,description, image:files})
            await service.save()
            res.status(201).json({service})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = serviceController