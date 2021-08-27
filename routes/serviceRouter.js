const router = require("express").Router()
const {createService, getAll} = require('../controllers/serviceController')
const upload = require('../fileUpload/fileUpload')

router.route('/service')
    .post(upload.single('image'), createService)
    .get(getAll)

module.exports = router