const router = require("express").Router()
const {createBlog, getAll} = require('../controllers/blogController')
const upload = require('../fileUpload/fileUpload')

router.route('/blog')
    .post(upload.single('image'), createBlog)
    .get(getAll)

module.exports = router