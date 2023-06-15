const Sequelize = require("sequelize");

const sequelize = new Sequelize("restaurante", "root", "a29052002", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
