const express = require('express')
const CartController = require('../controllers/cartController.js')
const checkSession = require('../middlewares/checkSession.js')

const router = express.Router()

router.get('/', checkSession, CartController.page)

router.get('/checkout', CartController.checkOut)
router.get('/delete/:id', CartController.delete)
module.exports = router