const express = require('express');
const router = express.Router();
const controlador = require('../controllers/maincontrollers');
const multer = require('multer');
const req = require('express/lib/request');
const path = require('path')

const storage = multer.diskStorage(
  {
      destination: (req,file,cb) => {
          cb(null, path.join(__dirname, '../public/images'))
      },
      filename: (req,file,cb)=>{
          let imageName = Date.now() + path.extname(file.originalname)
           cb(null, imageName );
      }
  }  
)

const upload = multer({storage})
router.get('/',controlador.index);


router.get('/register',controlador.register);


router.get('/login',controlador.login);


router.get('/carrito',controlador.carrito);


router.get('/detalle/:id',controlador.detalle);

router.get('/products/:id/edit',controlador.editar)
router.put('/products/:id',controlador.editado)


router.get('/products/create',controlador.crear);
router.post('/products',upload.single('imagen'),controlador.creado);

router.delete('/products/:id', controlador.eliminar);
module.exports = router;