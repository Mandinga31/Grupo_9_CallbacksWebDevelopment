module.exports = (sequelize, dataType) => {
    let alias = 'colors';

    let cols = {

        id: {
            type : dataType.INTEGER(10),
            primaryKey : true,
            autoIncrement : true
        },
        color : {
            type : dataType.STRING(100)
        },
        
    }
    let config = {
             tableName : 'color_product',
             timestamps  : false
    };

        const Color = sequelize.define(alias, cols, config);
        Color.associate = (models)=> {
        Color.hasMany(models.products,{
            as: "productos",
            foreignKey: "color_product_id"
        })
    }
        return Color;
}