module.exports = (sequelize, dataType) => {
    let alias = 'category';

    let cols = {

        id: {
            type : dataType.INTERGER(10),
            primaryKey : true,
            autoIncrement : true
        },
        nombre : {
            type : dataType.VARCHAR(100)
        },
        

    }
    let config = {
             tableName : 'user',
             timestamps  : true
    };

        const Category = sequelize.define(alias, cols, config);

        return Category;
}