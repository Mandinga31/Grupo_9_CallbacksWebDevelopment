const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productAPIController');

//Rutas
//Listado de todos los generos
router.get('/', productAPIController.list);
router.get('/:id', productAPIController.detail);


module.exports = router;