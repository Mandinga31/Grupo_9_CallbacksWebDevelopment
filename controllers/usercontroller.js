const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
const {validationResult} = require('express-validator')
const bcrypt = require("bcryptjs")



//Acá requiero las funcionalidades de model/user.js 


const req = require('express/lib/request');

//Acá esta la data de todos los usuarios guardada en la variable userData
const usersFilePath = path.join(__dirname, '../data/users.json');
let userData = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

//base de datos 
let db = require("../database/models")



const controlador = {

register: (req,res)=>{
    res.render('users/register');
},
processRegister: (req,res) =>{
    // if {Validaciones} 
    const resultValidation = validationResult(req);
    let userCreated = req.body;
    console.log(userCreated)
    
    if(resultValidation.errors.length > 0){           
        return res.render("users/register", {errors: resultValidation.mapped(), oldData: req.body})
      }
 
    
   db.users.findAll().then(usuarios => usuarios.forEach(usuario => 
        {if (usuario.email === userCreated.email){
            return res.render('users/register',{
            errors: {
                email: {
                    msg: "Este mail ya está registrado"
                }
            } 
        })
    }})).then(db.users.create({
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        email: req.body.email,
        password:  bcrypt.hashSync(req.body.password, 10),
        imagen: req.file.filename,
        category_user_id: req.body.category
       }
       ).then(()=> {return res.redirect("/")})
       .catch((e)=>{return res.send(e)}))
        
    
        
   
   

 
//    userCreated.imagen = req.file.filename;// p/la imagen de un nuevo usuario
 
//    let idUserCreated = (userData[userData.length -1].id) + 1;
//    userCreated.id = idUserCreated; // p/el id de un nuevo usuario
 
//    userCreated.password = bcrypt.hashSync(userCreated.password, 10) // p/encriptar la password
    
   
//    userData.push(userCreated);
 
//    fs.writeFileSync(usersFilePath, JSON.stringify(userData))
 
//    res.redirect("/")
   
   
},

login: (req,res)=>{
    res.render ('users/login');
}, 
processLogin: (req,res)=>{
    let errors = validationResult(req);
    if(errors.isEmpty() != true){
        res.render('users/login', {errors: errors.mapped(), oldData: req.body})
    }
        let emailIngresado = req.body.email
        let contraseñaIngresada = req.body.password
        
        db.users.findOne({
            where:{
                email: emailIngresado
            }
        }).then((userToLogin)=>{if(userToLogin){ 
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
            
        })
    
},
profile: (req,res)=>{
    return res.render('users/user',{
        user: req.session.userLogged
    })
},
editUser: (req,res)=>{
    db.users.findByPk(req.params.id, {
        include: [{association: 'categorias'}]


    }).then(userToEdit=> res.render("users/editUser",{userToEdit}))
},
processUserEdit: (req,res)=>{
    const resultValidation = validationResult(req);
    let id = req.params.id
    
    
    if(resultValidation.errors.length > 0){
        return db.users.findByPk(id, {include: [{association: 'categorias'}]}).then(userToEdit =>
        res.render("users/editUser", {errors: resultValidation.mapped(),
        oldData: req.body, userToEdit}))
      }{

     db.users.findByPk(id).then(user =>{
            let imagen;
            if(req.file.filename == undefined){
                imagen = user.imagen
            }else{
                imagen = req.file.filename
            }
            db.users.update({
            nombre: req.body.nombre,
            usuario: req.body.usuario,
            email: user.email,
            password:  bcrypt.hashSync(req.body.password, 10),
            imagen: imagen,
            category_user_id: req.body.category
           },{
            where: {id: req.params.id}
        }).then(()=> {return request.session.reload( function (err) {
                request.render('users/user', { user: req.session.user });
             });
        })})
           .catch((e)=>{return res.send(e)})
        }  
       
    
    
    
     
},
logout: (req,res)=>{
    req.session.destroy();
    return res.redirect('/');
},
eliminar: (req,res)=>{

	
    let idSelected = req.params.id
    db.users.destroy({
        where: { 
            id: idSelected
        },
        force: true
    })
    .then(()=>{res.redirect('/products')})
} 
}
module.exports = controlador; 