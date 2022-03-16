

// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const userController = require('../controllers/usercontroller');

router.get('/register', userController.register);

router.get('/login', userController.login); 

module.exports = router;





