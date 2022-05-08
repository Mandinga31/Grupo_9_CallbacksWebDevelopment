
module.exports = (sequelize, dataType) => {
        let alias = 'products';
        let cols = {

                id: {
                    type : dataType.INTERGER(10),
                    primaryKey : true,
                    autoIncrement : true
                },
                nombre : {
                    type : dataType.VARCHAR(100)
                },
                descripcion : {
                    type : dataType.VARCHAR(100)
                },
                imagen : {
                    type : dataType.INTERGER(10)
                },
                precio : {
                    type : dataType.INTERGER(10)
                }

            }
            let config = {
                     tableName : 'product',
                     timestamps  : true
            };

                const Product = sequelize.define(alias, cols, config);

                return Product;
        }

/* Nombre
Descripcion
Imagen
Precio
 */