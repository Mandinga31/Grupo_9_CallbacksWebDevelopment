const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
const { Op } = require('sequelize');
let db = require("../database/models")


const controlador = {

index: (req,res)=>{
    db.products.findAll(
		{
            include: [{association: 'categorias'}]
		}
	)
	.then(products=>{
		res.render('index', {products})
	})
},
contruir:(req,res)=>{
    res.render('construir')
},
buscar: (req,res)=>{
	let busquedad = req.body.buscar
	
	db.products.findAll({
		where: {nombre: {[Op.like]: "%"+ busquedad + "%" }
	}


		} 
	).then((productosEncontrados)=>{if(productosEncontrados.length >= 1){ 
		console.log("MI CONSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOL");
		console.log(productosEncontrados);
		res.render('products/productsSearch',{productosEncontrados})}
		else //if (productosEncontrados.length < 1 || productosEncontrados == null || productosEncontrados == undefined || productosEncontrados.length == db.products.length)
		{
		
			res.render('products/productsSearch', {productosEncontrados})
		}
	})
}};


module.exports = controlador; 