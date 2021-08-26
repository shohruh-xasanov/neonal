const router = require("express").Router()
const {createDr} = require('../controllers/drController')
const upload = require('../fileUpload/fileUpload')

router.route('/doctor')
    .post(upload.single('image'), createDr)

module.exports = router