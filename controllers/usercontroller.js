const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
const {validationResult} = require('express-validator')



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
   
},

login: (req,res)=>{
    res.render ('users/login');
}, 
processLogin: (req,res)=>{
    let errors = validationResult(req);
    if(errors.isEmpty() == true){
        let emailIngresado = req.body.email
        let contraseñaIngresada = req.body.password
        let userToLogin = User.findByField('email', emailIngresado)
        
        if(userToLogin){ 
            // let passwordIsOkey = bcryptjs.compareSync(contraseñaIngresada, userToLogin.contraseña)
            //if(passwordIsOkey){}
            if (userToLogin.contraseña == contraseñaIngresada){
                req.session.userLogged = userToLogin
                return res.redirect('userProfile')
            }
            {return res.render('users/login', {
                errors: {
                    password: {
                        msg: "La contraseña es incorrecta"
                    }
                } 
             })}
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
        
        
        res.render('users/login', {errors: errors.mapped()})
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