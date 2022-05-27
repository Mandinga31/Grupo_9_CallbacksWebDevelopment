
// ************ Require's ************
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();


// ************ Controller Require ************
const mainController = require('../controllers/maincontrollers');

router.get('/', mainController.index); 
router.post('/', mainController.buscar);

router.get('/construir', mainController.contruir);

module.exports = router;
