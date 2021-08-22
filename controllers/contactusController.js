const Contactus = require('../models/contactus')

const contactusControllers = {
    createContactus : async (req,res)=>{
        try {
            const {firstname,lastname,phone,email,comment} = req.body
            const contactus = new Contactus({firstname,lastname,phone,email,comment})
            await contactus.save()
            res.status(201).json({contactus})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = contactusControllers