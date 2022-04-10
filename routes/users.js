

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
    .isEmail().withMessage('Debes completar un email válido crack'),
    check('password')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
    
]
// ************ rutas ************
router.get('/register', guestMiddleware ,userController.register);
router.post('/register', upload.single('imagen'), userController.processRegister)

router.get('/login', guestMiddleware ,userController.login); 
router.post('/login', validaciones ,userController.processLogin)

router.get('/userProfile',authMiddleware ,userController.profile); 

router.get('/logout/', userController.logout)
module.exports = router;





