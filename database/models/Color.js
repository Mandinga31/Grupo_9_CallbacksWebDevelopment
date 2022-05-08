module.exports = (sequelize, dataType) => {
    let alias = 'colors';

    let cols = {

        id: {
            type : dataType.INTERGER(10),
            primaryKey : true,
            autoIncrement : true
        },
        color : {
            type : dataType.VARCHAR(100)
        },
        
    }
    let config = {
             tableName : 'color',
             timestamps  : true
    };

        const Color = sequelize.define(alias, cols, config);

        return Color;
}