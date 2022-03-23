const express = require('express');
const router = express.Router();


const productController = require('../controllers/productcontroller');


const multer = require('multer');
const req = require('express/lib/request');
const path = require('path');
const { contentType } = require('express/lib/response');

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


router.get('/', productController.listado)

router.get('/carrito/:id', productController.carrito);


router.get('/detalle/:id', productController.detalle);

router.get('/:id/edit', productController.editar)
router.put('/:id', upload.single('imagen'), productController.editado)


router.get('/create', productController.crear);
router.post('/',upload.single('imagen'), productController.creado);

router.delete('/detalle/:id', productController.eliminar);



module.exports = router;