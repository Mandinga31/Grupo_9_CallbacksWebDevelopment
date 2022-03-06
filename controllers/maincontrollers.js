const express = require('express');
const app = express();
const path = require('path')
const controlador = {

index: (req,res)=>{
res.render(path.join(__dirname, '../views/index.ejs'))
},
register: (req,res)=>{
    res.render(path.join(__dirname, '../views/register.ejs'));
},
login: (req,res)=>{
    res.render(path.join(__dirname,  '../views/login.ejs'));
},
carrito: (req,res)=>{
    res.render(path.join(__dirname,  '../views/productCart.ejs'));
},
detalle: (req,res)=>{
    res.render(path.join(__dirname , '../views/productDetail.ejs'));
},
crear: (req,res)=>{
    res.render(path.join(__dirname , '../views/create.ejs'));
},
};
module.exports = controlador;