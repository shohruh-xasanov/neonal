const router = require("express").Router()
const {createAbout,getAll} = require('../controllers/aboutController')
const upload = require('../fileUpload/fileUpload')

router.route('/about')
    .post(upload.single('image'), createAbout)
    .get(getAll)

module.exports = router