
module.exports = (sequelize, dataType) => {
        let alias = 'products';
        let cols = {

                id: {
                    type : dataType.INTEGER(10),
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
                    type : dataType.INTEGER(10)
                },
                category_product_id: { 
                    type : dataType.INTEGER(10)
                },
                color_product_id: { 
                    type : dataType.INTEGER(10)
                }
                }

            
            let config = {
                     tableName : 'product',
                     timestamps  : false
            };

                const Product = sequelize.define(alias, cols, config);
            Product.associate = (models)=> {
                Product.belongsTo(models.categoryProduct, {
                    as: "categorias",
                    foreignKey: "category_product_id"

                })
                Product.belongsTo(models.colors,{
                    as: "colores",
                    foreignKey: "color_product_id"
                })
                Product.belongsToMany(models.talles,{
                    as: "talles",
                    through: "product_talle",
                    foreignKey: "productt_id",
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