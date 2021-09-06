module.exports = app => {
    const mensaje = require("../controllers/mensaje.controller.js");
    var router = require("express").Router();

    router.post("/enviarmensaje", mensaje.create);
    router.get("/mensajesenviados/:usuario", mensaje.getMensajesEnviados);
    router.get("/mensajesrecibidos/:usuario", mensaje.getMensajesRecibidos);

    app.use('/api/mensaje', router);

}