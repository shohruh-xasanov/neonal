const router = require("express").Router()
const {createUser} = require('../controllers/userController')
const upload = require('../fileUpload/fileUpload')

router.route('/user')
    .post(createUser)

module.exports = router