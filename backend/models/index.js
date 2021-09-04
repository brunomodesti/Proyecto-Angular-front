const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuarios = require("./usuario.model.js")(sequelize, Sequelize);
db.mensajes = require("./mensaje.model.js")(sequelize, Sequelize);

db.mensajes.belongsTo(db.usuarios, { as: 'remitenteUsuario', foreignKey: 'remitente_usuario', targetKey: 'usuario'});
db.mensajes.belongsTo(db.usuarios, { as: 'destinatarioUsuario', foreignKey: 'destinatario_usuario', targetKey: 'usuario'});

module.exports = db;

