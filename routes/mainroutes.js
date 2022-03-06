const express = require('express');
const app = express();
const router = express.Router();
const controlador = require('../controllers/maincontrollers');

router.get('/',controlador.index);
router.get('/register',controlador.register);
router.get('/login',controlador.login);
router.get('/carrito',controlador.carrito);
router.get('/detalle',controlador.detalle);
router.get('/create',controlador.crear);
module.exports = router;