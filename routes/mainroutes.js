
// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const mainController = require('../controllers/maincontrollers');

router.get('/', mainController.index); 

module.exports = router;
