const express = require('express')
const StoreController = require('../controllers/storeController.js')
const router = express.Router()
const checkSession = require('../middlewares/checkSession.js')

router.get('/',  StoreController.page)
router.post('/addToCart/:id', checkSession, StoreController.addToCartPost)

module.exports = router