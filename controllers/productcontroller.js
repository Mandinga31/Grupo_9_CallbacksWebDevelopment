const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))




const controlador = {
listado: (req,res) => {
    res.render('products', {products})
},
carrito: (req,res)=>{
    const idProductToEdit = req.params.id - 1;
	const productToEdit = products[idProductToEdit]
	
	
    res.render ('products/productCart', {productToEdit});
},
detalle: (req,res)=>{
    let id = req.params.id
           
	res.render('products/productDetail', {productToEdit: products.filter((producto)=> producto.id == id)[0]})
    
},
crear: (req,res)=>{
    res.render('products/create', {products});
},
creado: (req,res)=>{
    const newProduct = req.body 
    console.log(req.body)
	let newProductId = (products[products.length - 1].id) + 1;
   
	// aclaraciones para la creacion del producto 	
	newProduct.imagen = req.file.filename // que la imagen sea la que ingreso por formulario
    newProduct.id = newProductId // que el id tenga la logica de la variable newProductId
	newProduct.category = newProduct.category // que la categoría sea la misma que ingreso por form

	products.push(newProduct);
			
			
	fs.writeFileSync(productsFilePath, JSON.stringify(products))
		  
	
	res.redirect("/products");

    
},
editar: (req,res)=>{
	let id = req.params.id
	let productToEdit = products.filter((producto)=> producto.id == id)[0];
		
	
	res.render('products/edit', {productToEdit})
		
    
},
editado: (req,res)=>{
	


		// ESTO ES EL PRODUCTO CON MODIFICACIONES
		const body = req.body 

		//ESTO ES EL PRODUCTO ORIGINAL
		let id = req.params.id
		let productToEdit = products.filter((producto)=> producto.id == id)[0];
		
		console.log(body); // Con modificaciones
		console.log('-----------------');
		console.log(productToEdit); // original

	    for(let i = 0; i<products.length; i ++){
			if(productToEdit.id == products[i].id){
				products[i].id = products[i].id
				products[i].precio = body.precio;
				products[i].color = body.color;
				products[i].nombre = body.nombre;
				products[i].descripcion = body.descripcion;
				products[i].category = body.category;
				products[i].imagen = req.file.filename  


				
			}
		}

		
	 

	
	  fs.writeFileSync(productsFilePath, JSON.stringify(products))
	
	  res.redirect('/products')
	
	 
},
eliminar: (req,res)=>{


	let idProductDelete = req.params.id
	console.log(idProductDelete)
	products = products.filter(product => 
	product.id != idProductDelete
		)

	fs.writeFileSync(productsFilePath, JSON.stringify(products))
	
	res.redirect('/products')
	

    }
};
module.exports = controlador; 