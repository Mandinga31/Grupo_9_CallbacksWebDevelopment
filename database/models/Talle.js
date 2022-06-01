module.exports = (sequelize, dataType) => {
    let alias = 'talles';

    let cols = {

        id: {
            type : dataType.INTEGER(10),
            primaryKey : true,
            autoIncrement : true
        },
        talle : {
            type : dataType.TEXT(100)
        },
        
    }
    let config = {
             tableName : 'talle',
             timestamps  : false
    };

        const Talle = sequelize.define(alias, cols, config);
        Talle.associate = (models)=> {
        Talle.belongsToMany(models.products,{
            as: "productos",
            through: "product_talle",
            foreignKey: "talle_id",
            otherKey:  "productt_id",
            timestamps: false
        })
    }
        return Talle;
}