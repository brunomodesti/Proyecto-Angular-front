const db = require("../models");
const Mensaje = db.mensajes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const mensaje = {
        cuerpo: req.body.cuerpo,
        remitente_usuario: req.body.remitente_usuario,
        destinatario_usuario: req.body.destinatario_usuario
    }
    Mensaje.create(mensaje)
    .then(data => {
        res.send(true);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "ocurrio error"
        });
    });
}

exports.getMensajesEnviados = (req, res) => {
    Mensaje.findAll({
        where: { remitente_usuario: req.params.usuario },
    })
    .then(data => {
        console.log(data);
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "ocurrio error"
        });
    });
}