const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
const {validationResult} = require('express-validator')
const bcrypt = require("bcryptjs")



//Acá requiero las funcionalidades de model/user.js 

const User = require('../model/User');
const req = require('express/lib/request');

//Acá esta la data de todos los usuarios guardada en la variable userData
const usersFilePath = path.join(__dirname, '../data/users.json');
let userData = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))



const controlador = {

register: (req,res)=>{
    res.render('users/register');
},
processRegister: (req,res) =>{
    //if {Validaciones} 
    const resultValidation = validationResult(req);
    let userCreated = req.body;
   console.log(userCreated)
 
    if(resultValidation.errors.length > 0){
     console.log(resultValidation.mapped())
     return res.render("users/register", {errors: resultValidation.mapped(),
     oldData: req.body})
   }

   userData.forEach(usuario => {if (usuario.email === userCreated.email){
    return res.render('users/register',{
        errors: {
            email: {
                msg: "Este mail ya está registrado"
            }
        } 
     })
    }
}
)
   

 
   userCreated.imagen = req.file.filename;// p/la imagen de un nuevo usuario
 
   let idUserCreated = (userData[userData.length -1].id) + 1;
   userCreated.id = idUserCreated; // p/el id de un nuevo usuario
 
   userCreated.password = bcrypt.hashSync(userCreated.password, 10) // p/encriptar la password
 
   userData.push(userCreated);
 
   fs.writeFileSync(usersFilePath, JSON.stringify(userData))
 
   res.redirect("/")
 },

login: (req,res)=>{
    res.render ('users/login');
}, 
processLogin: (req,res)=>{
    let errors = validationResult(req);
    if(errors.isEmpty() == true){
        let emailIngresado = req.body.email
        let contraseñaIngresada = req.body.password
        let userToLogin = User.findByField('email', emailIngresado);
        
        if(userToLogin){ 
            let passwordIsOkey = bcrypt.compareSync(contraseñaIngresada, userToLogin.password)
            if(passwordIsOkey){ req.session.userLogged = userToLogin
                return res.redirect('userProfile')
            }{
                return res.render('users/login', {
                errors: {
                    password: {
                        msg: "La contraseña es incorrecta"
                    }
                } 
             }
             )}
        }{
                return res.render('users/login',{
                errors: {
                    email: {
                        msg: "Este mail no está registrado"
                    }
                } 
             })
        }
        
    }else{
        
        
        res.render('users/login', {errors: errors.mapped(), oldData: req.body})
}
},
profile: (req,res)=>{
    return res.render('users/user',{
        user: req.session.userLogged
    })
},
logout: (req,res)=>{
    req.session.destroy();
    return res.redirect('/');
} 
}
module.exports = controlador; 