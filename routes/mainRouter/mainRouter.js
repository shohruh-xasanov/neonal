const router = require("express").Router()
const {getAll} = require('../../controllers/mainMenu/menuController')

router.get('/', getAll)

module.exports = router