module.exports= (sequelize, dataType) =>{

    let alias = "User";

    let cols = {
        
        id: {
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            type: dataType.INTEGER,
        },

        name: {
            allowNull: false,
            type: dataType.STRING,
        },

        lastname: {
            allowNull: false,
            type: dataType.STRING,
        },

        username:{
            allowNull: false,
            type: dataType.STRING
        },

        foto_perfil:{
            allowNull: true,
            type: dataType.STRING
        },

        password :{
            allowNull: false,
            type: dataType.STRING,
        },

        email:{
            allowNull: false,
            type: dataType.STRING,
        },

        date_of_birth: {
            allowNull: true,
            type: dataType.DATE,
        },

        created_at: {
            allowNull: false,
            type: dataType.DATE,
            field: "created_at",
            defaultValue: sequelize.literal('NOW()')
        },

        updated_at: {
            allowNull: true,
            type: dataType.DATE,
            field: "updated_at"

        }

    }
    let config = {
        tableName:"users", 
        timestamps: false,

    };

    

    const User=sequelize.define(alias, cols, config);
    // alias: identifica al modelo --  cols: lo que contiene la tabla  --  config: nombre de la tabla
    User.associate = (db) => {
        User.hasMany(db.Product, { // usuario tiene muchos productos
            as: "productos",
            foreignKey: "user_id"
        });
        User.hasMany(db.Comment, { // usuario hace muchos comentarios (a su vez, en muchos productos)
            as: "comentarios",
            foreignKey: "user_id"
        });

    }

    return User;

}    