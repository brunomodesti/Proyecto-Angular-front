
module.exports = (sequelize, Sequelize) => {
    const Mensaje = sequelize.define("mensaje", {
        cuerpo: {
            type: Sequelize.STRING
        }
    });


    return Mensaje;
};