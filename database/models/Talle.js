module.exports = (sequelize, dataType) => {
    let alias = 'talles';

    let cols = {

        id: {
            type : dataType.INTERGER(10),
            primaryKey : true,
            autoIncrement : true
        },
        talle : {
            type : dataType.interger(100)
        },
        
    }
    let config = {
             tableName : 'color',
             timestamps  : true
    };

        const Talle = sequelize.define(alias, cols, config);
        Talle.associate = (models)=> {
        Talle.belongsToMany(models.products,{
            as: "productos",
            through: "products_talle",
            foreignKey: "talle_id",
            otherKey:  "product_id",
            timestamps: false
        })
    }
        return Talle;
}