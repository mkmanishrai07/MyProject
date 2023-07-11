const express = require('express');
const route = express.Router()
const adminController = require('../controllers/taskManage');
const Authentication = require('../authentication/userAuthentication')

route.post('/assignTask',Authentication,adminController.assignTask);
route.get('/login',adminController.Userlogin)


module.exports = route