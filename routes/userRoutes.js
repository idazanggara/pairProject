const express = require('express')
const routes = express.Router()
const checkSessionBlockPath = require('../middlewares/chekSessionBlockPath.js')

const UserController = require('../controllers/userController.js')

routes.get('/register', checkSessionBlockPath, UserController.register)
routes.post('/register', UserController.postRegist)
routes.get('/login', checkSessionBlockPath, UserController.login)
routes.post('/login', UserController.postLogin)
routes.get('/logOut', UserController.logOut)

module.exports = routes