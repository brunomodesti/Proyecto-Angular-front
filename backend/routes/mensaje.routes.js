module.exports = app => {
    const mensaje = require("../controllers/mensaje.controller.js");
    var router = require("express").Router();

    router.post("/enviarmensaje", mensaje.create);
    router.get("/mensajesenviados/:usuario", mensaje.getMensajesEnviados);
    app.use('/api/mensaje', router);
}