const Service = require('../models/service')
const {sharpFile} = require('../fileUpload/sharp')
const OurContact = require('../models/ourContact')


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
    },
    getAll : async (req,res)=>{
        const service = await Service.find()
        const ourContact = await OurContact.find()
        res.render('servises',{
            service, ourContact
        })
    }
}

module.exports = serviceController