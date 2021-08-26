const router = require("express").Router()
const {createAbout} = require('../controllers/aboutController')
const upload = require('../fileUpload/fileUpload')

router.route('/about')
    .post(upload.single('image'), createAbout)

module.exports = router