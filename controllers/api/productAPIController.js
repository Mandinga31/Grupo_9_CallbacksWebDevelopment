const path = require('path');
let db = require("../../database/models")
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');



const productAPIController = {
    list: (req,res) => {
        let promCategoria = db.categoryProduct.findAll()
        let promColor = db.colors.findAll()
        let promProducto = db.products.findAll({include: [{association: 'categorias'},{association: 'colores'}]})
        // aca busco cada categoría para saber cuantos productos contiene 
        let promUnisex = db.products.findAll({
            include: [{association: 'categorias'}],
             where: { 
                    category_product_id: 1}})
        
        let promMujer = db.products.findAll({
            include: [{association: 'categorias'}],
            where: { 
                category_product_id: 2}})
        
        let promHombre = db.products.findAll({
            include: [{association: 'categorias'}],
            where: { 
                category_product_id: 3}})

        let promNiños = db.products.findAll({
                include: [{association: 'categorias'}],
                where: { 
                        category_product_id: 4}})
        let promSmartwatch = db.products.findAll({
                include: [{association: 'categorias'}],
                 where: { 
                         category_product_id: 5}})
        let promVintage = db.products.findAll({
                include: [{association: 'categorias'}],
                  where: { 
                          category_product_id: 6}})
        
        Promise.all([promCategoria, promColor ,promProducto,promUnisex,promMujer,promHombre,promNiños,promSmartwatch,promVintage])
        .then(([categoria, color, product,vintage,mujer,hombre,niños,smartwatch,unisex])=>

     
                {return res.json({
                count: product.length,
                countByCategory: [{Vintage: vintage.length},{Mujer: mujer.length}, {Hombre: hombre.length}, {Niños: niños.length}, {Smartwatch: smartwatch.length}, {Unisex: unisex.length}],
                countCategorias: categoria.length,
                color: color,
                //Hago un map para agregar la url a cada producto(objeto) del array productos
                products: product.map(producto=> {
                    let rutaImagen = producto.imagen
                    return {
                    id: producto.id,
                    imagen: 'http://localhost:3001/images/' + rutaImagen,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    descripcion: producto.descripcion,
                    categoria: producto.categorias.nombre, 
                    detail: 'http://localhost:3001/api/products/' + producto.id}}),
                status: 200
            })}
        )
        
    },
    detail: (req, res) => {
        db.products.findByPk(req.params.id,
            {
                include: [{association: 'categorias'},{association: 'colores'}]
            })
            .then(producto => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/movie/:id'
                    },
                    data: {
                        id: producto.id,
                        nombre:producto.nombre,
                        descripcion: producto.descripcion,
                        imagen: producto.imagen,
                        relacion: [{categoria: producto.categorias.nombre},{color: producto.colores.color}], 
                        detail: 'http://localhost:3001/api/products/' + producto.id}
                }
                res.json(respuesta);
            });
}
}
module.exports = productAPIController
