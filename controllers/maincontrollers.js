const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

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
};
module.exports = controlador; 