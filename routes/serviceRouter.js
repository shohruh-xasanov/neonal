const router = require("express").Router()
const {createService} = require('../controllers/serviceController')
const upload = require('../fileUpload/fileUpload')

router.route('/service')
    .post(upload.single('image'), createService)

module.exports = router