const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());

const Sequelize = require("sequelize");
const sequelize = new Sequelize("restaurante", "root", "a29052002", {
  host: "localhost",
  dialect: "mysql",
});

// Testando a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  })
  .catch((err) => {
    console.error("Não foi possível conectar-se ao banco de dados:", err);
  });

// Configuração do middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
// Aqui você importa e utiliza os arquivos de rotas definidos para cada entidade
const userRoutes = require("./api/routes/userRoutes");
const menuItemRoutes = require("./api/routes/menuItemRoutes");
const orderRoutes = require("./api/routes/orderRoutes");

app.use("/api/users", userRoutes);
app.use("/api/menuitems", menuItemRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/index", (req, res) => {
  res.render("index");
});

// Configuração do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
