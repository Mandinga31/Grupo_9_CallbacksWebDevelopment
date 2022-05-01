const fs = require('fs');
const path = require('path')


//Acá esta la data de todos los usuarios
const usersFilePath = path.join(__dirname, '../data/users.json');
let userData = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))


const User = { 
    // Encontrame al usuario por su id 
    findByPk: (id)=> {
        let usuarioBuscado = userData.find(cadaUser => cadaUser.id === id);
        return usuarioBuscado 
    }, 
    findByField: (field, text)=> {
        let usuarioBuscado = userData.find(cadaUser => cadaUser[field] === text)
        return usuarioBuscado
    },
    create: (newUser)=> {
        userData.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(userData, null, ''));
        return newUser
    }
   
}
module.exports = User; 