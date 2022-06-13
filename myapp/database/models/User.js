module.exports= (sequelize, dataType) =>{

    let alias = "Users";

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

        create_at: {
            allowNule: false,
            type: dataType.DATE,
            field: "created_at"
        },

        update_at: {
            allowNule: false,
            type: dataType.DATE,
            field: "updated_at"

        }

    }
    let config = {
        tableName:"users", 
        timestamps: true,

    };

    Usuario.associate = (db) => {
        Usuario.hasMany(db.Product, { // usuario tiene muchos productos
            as: "productos",
            foreignKey: "users_id"
        });
        Usuario.hasMany(db.Comment, { // usuario hace muchos comentarios (a su vez, en muchos productos)
            as: "comentarios",
            foreignKey: "users_id"
        });

    }

    const Usuario=sequelize.define(alias, cols, config);
    // alias: identifica al modelo --  cols: lo que contiene la tabla  --  config: nombre de la tabla

    return Usuario;

}    