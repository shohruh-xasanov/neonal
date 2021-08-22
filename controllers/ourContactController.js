const OurContact = require('../models/ourContact')

const OurContactControllers = {
    createOurContact : async (req,res)=>{
        try {
            const {phone,map,email} = req.body
            const ourContact = new OurContact({phone,map,email})
            await ourContact.save()
            res.status(201).json({ourContact})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = OurContactControllers