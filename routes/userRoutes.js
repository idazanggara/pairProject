const express = require('express')
const routes = express.Router()

const UserController = require('../controllers/userController.js')

routes.get('/register', UserController.register)
routes.post('/register', UserController.postRegist)
routes.get('/login', UserController.login)
routes.post('/login', UserController.postLogin)
routes.get('/logOut', UserController.logOut)

module.exports = routes