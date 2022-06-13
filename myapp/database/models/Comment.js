module.exports= (sequelize, dataType) =>{

    let alias = "Comment";

    let cols = {
        
        id: {
            autoIncrement: true,
            allowNule: false,
            primaryKey: true,
            type: dataType.INTEGER,
        },

        comment: {
            allowNule: false,
            type: dataType.STRING,
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

        },

    }
    let config = {
        tableName:"users", 
        timestamps: true,

    };

    Comment.associate = (db) => {
        Comment.belongsTo(db.Product, {// comentario pertenece al producto
            as: "producto",
            foreignKey: "product_id"
        });
        Comment.belongsTo(db.User, { // comentario pertence a usuario
            as: "usuario",
            foreignKey: "user_id"
        });

    }

    const Comment=sequelize.define(alias, cols, config);
    // alias: identifica al modelo --  cols: lo que contiene la tabla  --  config: nombre de la tabla

    return Comment;
}
