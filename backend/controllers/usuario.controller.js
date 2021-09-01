const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const usuario = {
        nombres: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        password: req.body.password,
        ciudad: req.body.ciudad,
        pais: req.body.pais
    };
    
    Usuario.create(usuario)
        .then(data => {
            res.send(true);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "ocurrio error"
            });
        });
};