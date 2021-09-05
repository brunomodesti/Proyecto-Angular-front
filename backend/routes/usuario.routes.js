module.exports = app => {
    const usuarios = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
  
    router.post("/registrar", usuarios.create);
  
    router.post("/login", usuarios.login);

    router.get("/buscarUsuarios", usuarios.todosUsuarios);
    
    app.use('/api/usuario', router);
};