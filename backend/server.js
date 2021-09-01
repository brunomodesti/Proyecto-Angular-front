const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

  const db = require("./models");
  db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Esto es Farmbook" });
});

require("./routes/usuario.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/* app.post("/login", (req, res) => {
  console.log(req);
  res.json({ usuario: req.body.username });
});

app.post("/registrar", (req, res) => {
  console.log(req);
  res.json({ usuario: req.body.username });
}); */