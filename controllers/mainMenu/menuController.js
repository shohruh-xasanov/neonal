const Slider = require('../../models/slider')
const Service = require('../../models/service')
const About = require('../../models/about')
const Doctor = require('../../models/doctar')
const Blog = require('../../models/blog')
const Patients = require('../../models/patients')
const OurContact = require('../../models/ourContact')
const Banner = require('../../models/banner')

const mainMenu = {
    getAll: async (req,res)=>{
        const slider = await Slider.find().limit(3).sort({createdAt : -1})
        const service = await Service.find().limit(6)
        const about = await About.find().limit(3)
        const doctor = await Doctor.find().limit(1)
        const banner = await Banner.find().limit(1).sort({createdAt : -1})
        const blog = await Blog.find().find().sort({createdAt : -1})
        const patients = await Patients.find()
        const ourContact = await OurContact.find().select({phone:1, email:1})
        res.render('index', {
            slider,service,about,
            doctor,banner,blog,
            patients,ourContact
        })
    },
}

module.exports = mainMenu