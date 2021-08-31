module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        nombres: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        usuario: {
            type: Sequelize.STRING
        },
        pais: {
            type: Sequelize.STRING
        },
        ciudad: {
            type: Sequelize.STRING
        }
    });

    return Usuario;
};