module.exports = (sequelize, dataType) => {
    let alias = 'categoryProduct';

    let cols = {

        id: {
            type : dataType.INTERGER(10),
            primaryKey : true,
            autoIncrement : true
        },
        nombre : {
            type : dataType.STRING(100)
        },
        

    }
    let config = {
             tableName : 'category_products',
             timestamps  : false
    };

        const CategoryProduct = sequelize.define(alias, cols, config);
        CategoryProduct.associate = (models)=> {
            CategoryProduct.hasMany(models.products, {
            as: "productos",
            foreignKey: "categoryProduct_id"

        })
    }
        return CategoryProduct;
}