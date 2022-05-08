 /*ID
Nombre
Usuario
Email
Password
Imagen
 */


module.exports = (sequelize, dataType) => {
    let alias = 'users';
    let cols = {

            id: {
                type : dataType.INTERGER(10),
                primaryKey : true,
                autoIncrement : true
            },
            nombre : {
                type : dataType.VARCHAR(100)
            },
            usuario : {
                type : dataType.VARCHAR(100)
            },
            email : {
                type : dataType.VARCHAR(100)
            },
            password : {
                type : dataType.VARCHAR(10)
            },
            imagen : {
                type : dataType.INTERGER(10)
            }

        }
        let config = {
                 tableName : 'user',
                 timestamps  : true
        };

            const User = sequelize.define(alias, cols, config);

            return User;
    }