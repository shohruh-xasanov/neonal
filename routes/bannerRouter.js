const router = require("express").Router()
const {createBanner} = require('../controllers/bannerController')
const uploads = require('../fileUpload/vedioUpload')
const upload = require('../fileUpload/fileUpload')

router.route('/banner')
    .post(uploads.fields([
        {name:'file',
        maxCount:1}, 
        {name:'image',
        maxCount:1}]),createBanner)

module.exports = router