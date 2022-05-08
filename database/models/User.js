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
                type : dataType.STRING(50)
            },
            usuario : {
                type : dataType.STRING(25)
            },
            email : {
                type : dataType.STRING(50)
            },
            password : {
                type : dataType.STRING(250)
            },
            imagen : {
                type : dataType.TEXT(200)
            }

        }
        let config = {
                 tableName : 'users',
                 timestamps  : false
        };

            const User = sequelize.define(alias, cols, config);
            User.associate(models =>{
                User.belongsTo(models.categoryUser,{
                    as: "categorias",
                    foreignKey: "category_id"
                })
            })
            return User;
    }