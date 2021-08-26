const router = require("express").Router()
const {createContactus} = require('../controllers/contactusController')

router.route('/contact')
    .post(createContactus)

module.exports = router