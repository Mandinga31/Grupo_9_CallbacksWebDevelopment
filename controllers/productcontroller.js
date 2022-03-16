const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))




const controlador = {
listado: (req,res) => {
    res.render('products', {products})
},
carrito: (req,res)=>{
    res.render ('products/productCart');
},
detalle: (req,res)=>{
    const idProductToEdit = req.params.id - 1;
	const productToEdit = products[idProductToEdit]
	
	res.render('products/productDetail', {productToEdit})
    
},
crear: (req,res)=>{
    res.render('products/create', {products});
},
creado: (req,res)=>{
    const newProduct = req.body
    console.log(req.body)
	const newProductId = (products[products.length - 1].id) + 1;
   
		
	newProduct.imagen = req.file.filename
    console.log(newProduct.imagen)
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