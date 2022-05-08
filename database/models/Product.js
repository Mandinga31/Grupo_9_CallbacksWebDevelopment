
module.exports = (sequelize, dataType) => {
        let alias = 'products';
        let cols = {

                id: {
                    type : dataType.INTERGER(10),
                    primaryKey : true,
                    autoIncrement : true
                },
                nombre : {
                    type : dataType.STRING(100)
                },
                descripcion : {
                    type : dataType.STRING(100)
                },
                imagen : {
                    type : dataType.TEXT(200)
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
            Product.associate = (models)=> {
                Product.belongsTo(models.categoryProduct, {
                    as: "categorias",
                    foreignKey: "categoryProduct_id"

                })
                Product.belongsToMany(models.colors,{
                    as: "colores",
                    through: "products_color",
                    foreignKey: "product_id",
                    otherKey:  "color_id",
                    timestamps: false
                })
                Product.belongsToMany(models.talles,{
                    as: "talles",
                    through: "products_talle",
                    foreignKey: "product_id",
                    otherKey:  "talle_id",
                    timestamps: false
                })
            }
             
                return Product;
        }

/* Nombre
Descripcion
Imagen
Precio
 */