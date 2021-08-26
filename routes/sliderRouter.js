const router = require("express").Router()
const {createSlider} = require('../controllers/sliderController')
const upload = require('../fileUpload/fileUpload')

router.route('/slider')
    .post(upload.single('image'), createSlider)

module.exports = router