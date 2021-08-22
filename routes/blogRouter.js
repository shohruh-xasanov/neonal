const router = require("express").Router()
const {createBlog} = require('../controllers/blogController')
const upload = require('../fileUpload/fileUpload')

router.route('/blog')
    .post(upload.single('image'), createBlog)

module.exports = router