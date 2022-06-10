const express = require('express');
const router = express.Router();


const productController = require('../controllers/productcontroller');


const multer = require('multer');
const req = require('express/lib/request');
const path = require('path');
const { contentType } = require('express/lib/response');

const {check} = require("express-validator")

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
                       // VALIDACIONES DE CREACION DE PRODUCTOS, Boris sprint 7 //
const CreateValidations = [
    check("nombre").notEmpty().withMessage("Debes asignarle un nombre al producto").isLength( min = 5 ).withMessage("El nombre del preoducto debe tener al menos 5 caracteres ").bail(),
    check("descripcion").notEmpty().withMessage("Debes asignarle una breve descripcion al producto").isLength( min = 20 ).withMessage("El campo de descripcion debe tener al menos 20 caracteres ").bail(),
    check("precio").notEmpty().withMessage("Debes asignarle un precio al producto").bail(),
    check("category").notEmpty().withMessage("Debes asignarle una categoria al producto").bail(),
    check("color").notEmpty().withMessage("Debes asignarle un color al producto").bail(),
    check("imagen").custom((values, {req}) =>{
        let file = req.file;
        let extensionesValidas = [".jpg", ".jpeg", ".png", ".gift"]

        if (!file){
            throw new Error ("Debes asignarle una imagen al producto con extension '.jpg', '.jpeg', '.png', '.gift'")
        } else {
            let extensionArchivo = path.extname(file.originalname);
            if(!extensionesValidas.includes(extensionArchivo)){
                throw new Error (`La imagen debe tener extension ${extensionesValidas. join(", ")}`)
            }
        }
        return true
    })
]
                       // VALIDACIONES DE EDICION DE PRODUCTOS, Boris sprint 7 //
const EditValidations = [
    check("nombre").notEmpty().withMessage("Debes asignarle un nombre al producto").isLength( min = 5 ).withMessage("El nombre del preoducto debe tener al menos 5 caracteres ").bail(),
    check("descripcion").notEmpty().withMessage("Debes asignarle una breve descripcion al producto").isLength( min = 20 ).withMessage("El campo de descripcion debe tener al menos 20 caracteres ").bail(),
    check("precio").notEmpty().withMessage("Debes asignarle un precio al producto").bail(),
    check("category").notEmpty().withMessage("Debes asignarle una categoria al producto").bail(),
    check("color").notEmpty().withMessage("Debes asignarle un color al producto").bail(),
    
    
]


router.get('/', productController.listado)

router.get('/carrito', productController.carrito);

router.get('/tech', productController.tech);
router.get('/vintage', productController.vintage);

router.get('/detalle/:id', productController.detalle);

router.get('/:id/edit', productController.editar)
router.post('/:id/edit', upload.single('imagen'), EditValidations, productController.editado)


router.get('/create', productController.crear);
router.post('/',upload.single('imagen'), CreateValidations, productController.creado);

router.delete('/detalle/:id', productController.eliminar);



module.exports = router;