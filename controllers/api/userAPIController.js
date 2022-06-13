const path = require('path');
let db = require("../../database/models")
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');



const userAPIController = {
    list: (req,res) => {
        db.users.findAll()
        .then(users=>{
            let respuesta = {
                count: users.length,
                users: users.map(user=> {return {
                    id: user.id,
                    nombre: user.nombre, 
                    email: user.email,
                    detail: 'http://localhost:3001/api/users/' + user.id}
                }),
                status: 200
            } 
     
                {return res.json(respuesta)}}
        )
        
    },
    detail: (req, res) => {
        db.users.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/movie/:id'
                    },
                    data: {
                        id: user.id,
                        nombre: user.nombre,
                        usuario: user.usuario, 
                        email: user.email,
                        imagen: user.imagen,
                        email: user.email}
                    }
                    
                res.json(respuesta);
                })}
}

module.exports = userAPIController
