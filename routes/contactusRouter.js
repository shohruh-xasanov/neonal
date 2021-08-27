const router = require("express").Router()
const {createContactus, getAll} = require('../controllers/contactusController')

router.route('/contact')
    .post(createContactus)
    .get(getAll)

module.exports = router