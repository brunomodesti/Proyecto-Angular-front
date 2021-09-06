const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

  const db = require("./models");
  db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Esto es Farmbook" });
});

require("./routes/usuario.routes")(app);
require("./routes/mensaje.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
