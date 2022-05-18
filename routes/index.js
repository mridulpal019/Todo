const express=require('express');

const router= express.Router();
const todoController = require('../controllers/home');



router.get('/',todoController.home); 

module.exports =router;
