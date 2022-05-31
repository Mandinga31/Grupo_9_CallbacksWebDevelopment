

// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const req = require('express/lib/request');
const path = require('path');
const { contentType } = require('express/lib/response');
const {check} = require('express-validator')

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
// ************ middlewares ************
const guestMiddleware = require('../middlewares/guestmiddleware');
const authMiddleware = require('../middlewares/authmiddleware');
// ************ Controller Require ************
const userController = require('../controllers/usercontroller');
const { Router } = require('express');

// ************ validaciones ************
const validaciones = [
    check('email')
    .notEmpty().withMessage('Debes completar el email').bail()
    .isEmail().withMessage('Debes completar un email válido').bail(),
    check('password')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
]

const registerValidations = [
    check("nombre")
        .notEmpty().withMessage("Debes completar con tu nombre y apellido").bail()
        .isLength({min:3, max: 15}).withMessage("El nombre debe tener más de 2 caracteres y menos de 15").bail(),
    check("usuario")
        .notEmpty().withMessage("Debes completar con un nombre de usuario").bail()
        .isLength({min:3, max: 15}).withMessage("El usuario debe tener más de 2 caracteres").bail(),
    check("email")
        .notEmpty().withMessage("Debes completar con tu email").bail()
        .isEmail().withMessage("Debe ser un email valido"),
    check("password")
        .notEmpty().withMessage("Debes completar con tu contraseña").bail()
        .isLength({min:8}).withMessage("La contraseña debe tener mas de 8 caracteres"),
    check("imagen")
        .custom((values, {req}) =>{
        let file = req.file;
        let extensionesValidas = [".jpg", ".png", ".gift"]

        if (!file){
            throw new Error ("Debes seleccionar una imagen de perfil")
        } else {
            let extensionArchivo = path.extname(file.originalname);
            if(!extensionesValidas.includes(extensionArchivo)){
                throw new Error (`la imagen debe tener extension ${extensionesValidas. join(", ")}`)
            }
        }
        return true
    })
]
const editValidations = [
    check("nombre")
        .notEmpty().withMessage("Debes completar con tu nombre y apellido").bail()
        .isLength({min:3, max: 15}).withMessage("El nombre debe tener más de 2 caracteres y menos de 15").bail(),
    check("usuario").notEmpty()
        .withMessage("Debes completar con un nombre de usuario").bail(),
    check("password")
        .notEmpty().withMessage("Debes completar con tu contraseña").bail()
        .isLength({min:8}).withMessage("La contraseña debe tener mas de 8 caracteres"),
    check("imagen").custom((values, {req}) =>{
        let file = req.file;
        let extensionesValidas = [".jpg", ".png", ".gift"]

        if (!file){
            throw new Error ("Debes seleccionar una imagen de perfil")
        } else {
            let extensionArchivo = path.extname(file.originalname);
            if(!extensionesValidas.includes(extensionArchivo)){
                throw new Error (`la imagen debe tener extension ${extensionesValidas. join(", ")}`)
            }
        }
        return true
    })
]

// ************ rutas ************
router.get('/register', guestMiddleware ,userController.register);
router.post('/register', upload.single('imagen'), registerValidations, userController.processRegister);

router.get('/login', guestMiddleware ,userController.login); 
router.post('/login', validaciones ,userController.processLogin);

router.get('/register', guestMiddleware ,userController.register);
router.get('/userProfile',authMiddleware ,userController.profile);

router.get('/editUserProfile/:id',authMiddleware,userController.editUser); 
router.put('/:id', upload.single('imagen'),editValidations,userController.processUserEdit)

router.get('/logout/', userController.logout)
router.delete("/:id", userController.eliminar)

module.exports = router;





