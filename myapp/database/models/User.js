module.exports= (sequelize, dataType) =>{

    let alias = "User";

    let cols = {
        
        id: {
            autoIncrement: true,
            allowNule: false,
            primaryKey: true,
            type: dataType.INTEGER,
        },

        name: {
            allowNule: false,
            type: dataType.STRING,
        },

        lastname: {
            allowNule: false,
            type: dataType.STRING,
        },

        username:{
            allowNule: false,
            type: dataType.STRING
        },

        foto_perfil:{
            allowNule: false,
            type: dataType.STRING
        },

        password :{
            allowNule: false,
            type: dataType.STRING,
        },

        email:{
            allowNule: false,
            type: dataType.STRING,
        },

        date_of_birth: {
            allowNule: true,
            type: dataType.DATE,
        },

        created_at: {
            allowNule: false,
            type: dataType.DATE,
            field: "created_at"
        },

        updated_at: {
            allowNule: false,
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