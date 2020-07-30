const express = require('express')
const routes = express.Router()
const HomeController = require('../controllers/homeController.js')

const UserRoutes = require('../routes/userRoutes')
const StoreRoute = require('../routes/storeRoutes')
const CartRoute = require('../routes/cartRoutes')

routes.get('/', HomeController.getHome)
routes.use('/user', UserRoutes)
routes.use('/store', StoreRoute)
routes.use('/cart', CartRoute)

module.exports = routes