const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))




const controlador = {

index: (req,res)=>{
res.render('index')
},
register: (req,res)=>{
    res.render('user/register');
},
login: (req,res)=>{
    res.render ('user/login');
},
carrito: (req,res)=>{
    res.render ('products/productCart');
},
detalle: (req,res)=>{
    res.render('products/productDetail');
},
crear: (req,res)=>{
    res.render('products/create');
},
creado: (req,res)=>{
    const newProduct = req.body
	const newProductId = (products[products.length - 1].id) + 1;
	newProduct.image = req.file.filename
	newProduct.id = newProductId
	products.push(newProduct);
			
			
			fs.writeFileSync(productsFilePath, JSON.stringify(products))
		  
	
			res.redirect("/products");

    
},
editar: (req,res)=>{
    res.send('/products/:id/edit')
},
editado: (req,res)=>{
/*aca va la lógica de editar el producto*/ 
},
eliminar: (req,res)=>{
    /*aca va la lógica de eliminar el producto*/ 
    }
};
module.exports = controlador; 