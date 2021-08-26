const router = require("express").Router()
const {createOurContact} = require('../controllers/ourContactController')

router.route('/contacts')
    .post( createOurContact)

module.exports = router