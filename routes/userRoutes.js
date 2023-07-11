const express = require('express');
const userController = require('../controllers/userController')
const routes = express.Router();
const Authentication = require('../authentication/userAuthentication')

routes.post('/registraion',Authentication, userController.UserRegistration)
routes.get('/findusers',Authentication,userController.findUserDetails)
routes.put('/update',Authentication,userController.UpdateUserDetails)
routes.delete('/delete',Authentication,userController.deleteUserDetails)

module.exports = routes
