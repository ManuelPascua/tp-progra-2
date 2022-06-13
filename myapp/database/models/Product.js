module.exports= (sequelize, dataType) =>{

    let alias = "Product";

    let cols = {
        id: {
            autoIncrement: true,
            allowNule: false,
            primaryKey: true,
            type: dataType.INTEGER,
        },
        model: {
            allowNule: false,
            type: dataType.STRING,
        },
        marca:{
            allowNule: false,
            type: dataType.STRING,
        },
        year :{
            type: dataType.INTEGER,

        },
        price:{
            type: dataType.INTEGER,
            allowNule: true,

        },
        foto:{
            type: dataType.STRING,
            allowNule: false
        },
        
        create_at: {
            allowNule: false,
            type: dataType.DATE,
        },
        update_at: {
            allowNule: false,
            type: dataType.DATE,
        },
    }
    let config = {
        tableName:"products", 
        timestamps: true,

    }; 
    
    Product.associate = (db) => {
        Product.belongsTo(db.User, { //Product pertenece a User
            as: "usuario",
            foreignKey: "user_id"
        });
        Product.hasMany(db.Comment, { //Product tiene muchos Comment
            as: "comentarios",
            foreignKey: "product_id"
        });
        //Cada vez que hacemos un .belongsTo o .hasMany en un modelo, es necesario hacer su contraparte en el otro modelo correspondiente
    }

    const Product=sequelize.define(alias, cols, config);
    // alias: identifica al modelo --  cols: lo que contiene la tabla  --  config: nombre de la tabla

    return Product;
}