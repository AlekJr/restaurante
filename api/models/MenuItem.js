const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const MenuItem = sequelize.define("Cardapio", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// MenuItem.sync({ force: false }).then(() => {}); // vai sincronizar com a Pergunta, (ja no FORCE:FALSE ele não vai recriar a tabela) se não existir uma tabela chamada pergunta ele vai criar caso ja exista uma ele não cria nada

module.exports = MenuItem;
