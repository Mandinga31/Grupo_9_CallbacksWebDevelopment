module.exports = (sequelize, dataType) => {
    let alias = 'categoryProduct';

    let cols = {

        id: {
            type : dataType.INTEGER(10),
            primaryKey : true,
            autoIncrement : true
        },
        nombre : {
            type : dataType.STRING(100)
        },
        

    }
    let config = {
             tableName : 'category_product',
             timestamps  : false
    };

        const CategoryProduct = sequelize.define(alias, cols, config);
        CategoryProduct.associate = (models)=> {
            CategoryProduct.hasMany(models.products, {
            as: "productos",
            foreignKey: "category_product_id"

        })
    }
        return CategoryProduct;
}