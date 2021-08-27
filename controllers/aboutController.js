const About = require('../models/about')
const {sharpFile} = require('../fileUpload/sharp')
const Doctor = require('../models/doctar')
const Patients = require('../models/patients')
const OurContact = require('../models/ourContact')

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
    },
    getAll : async (req,res)=>{
        const about = await About.find().limit(3)
        const doctor = await Doctor.find()
        const patients = await Patients.find()
        const ourContact = await OurContact.find().select({phone:1, email:1})
        res.render('about', {
            about,doctor,
            patients,ourContact
        })
    }
}

module.exports = aboutControllers