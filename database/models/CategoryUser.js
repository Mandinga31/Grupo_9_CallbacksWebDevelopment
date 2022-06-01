module.exports = (sequelize, dataType) => {
    let alias = 'categoryUser';

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
             tableName : 'category_user',
             timestamps  : false
    };

        const CategoryUser = sequelize.define(alias, cols, config);
        CategoryUser.associate = (models)=> {
        CategoryUser.hasMany(models.users, {
            as: "usuarios",
            foreignKey: "category_user_id"

        })
    }
        return CategoryUser;
}