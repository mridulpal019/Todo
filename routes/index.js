const express=require('express');
const app=express();

const router= express.Router();
const todoController = require('../controllers/home');

const db = require('../config/mongoose');
const Tasks=require('../models/task');


const bodyParser = require('body-parser');//parser used to decode the encrpyted form data send by browser to server
app.use(bodyParser.urlencoded({extended: false}));



router.get('/',todoController.home); 
router.post('/create-task',todoController.createTask);

module.exports =router;
