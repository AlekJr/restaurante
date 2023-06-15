const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("Usuarios", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// User.sync({ force: false }).then(() => {}); // vai sincronizar com a Pergunta, (ja no FORCE:FALSE ele não vai recriar a tabela) se não existir uma tabela chamada pergunta ele vai criar caso ja exista uma ele não cria nada
module.exports = User;
