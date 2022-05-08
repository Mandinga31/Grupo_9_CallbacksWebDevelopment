module.exports = (sequelize, dataType) => {
    let alias = 'colors';

    let cols = {

        id: {
            type : dataType.INTERGER(10),
            primaryKey : true,
            autoIncrement : true
        },
        color : {
            type : dataType.STRING(100)
        },
        
    }
    let config = {
             tableName : 'color',
             timestamps  : true
    };

        const Color = sequelize.define(alias, cols, config);
        Color.associate = (models)=> {
        Color.belongsToMany(models.products,{
            as: "coloresProducto",
            through: "products_talle",
            foreignKey: "color_id",
            otherKey:  "product_id",
            timestamps: false
        })
    }
        return Color;
}