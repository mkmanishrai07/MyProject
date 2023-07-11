const taskController = require('../controllers/taskController');
const path = require('path')
const express  = require('express');
const routes = express.Router();
const multer = require('multer')
const Authentication = require('../authentication/userAuthentication')

const filePath = path.join(__dirname,'../uploads')
// console.log('filePath: ', filePath);

const upload = multer({storage:multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,filePath)
    },
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})})
// const uploadImg = multer({storage: storage}).single('image');

routes.post('/createtask',Authentication,upload.array('image'),taskController.createTask)
routes.get('/findtask',Authentication, taskController.findTask)
routes.put('/updatetask',Authentication,taskController.updateTaskdetails);
routes.delete('/deletetask',Authentication, taskController.deleteTask)


module.exports = routes
