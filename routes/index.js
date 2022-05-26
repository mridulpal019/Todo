const express=require('express');
const app=express();

//setting up router to handle requests
const router= express.Router();
const todoController = require('../controllers/home');
//making connection too database via mongoose
const db = require('../config/mongoose');

//parser used to decode the encrpyted form data send by browser to server
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));



router.get('/',todoController.home); 
router.post('/create-task',todoController.createTask);
router.get('/delete-task',todoController.deleteTask);
router.get('/delete-completed-tasks',todoController.deleteCompletedTask)

module.exports =router;
