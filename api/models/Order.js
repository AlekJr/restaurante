const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Order = sequelize.define("Pedidos", {
  status: {
    type: DataTypes.ENUM("pendente", "em preparação", "pronto"),
    allowNull: false,
    defaultValue: "pendente",
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
// Order.sync({ force: false }).then(() => {}); // vai sincronizar com a Pergunta, (ja no FORCE:FALSE ele não vai recriar a tabela) se não existir uma tabela chamada pergunta ele vai criar caso ja exista uma ele não cria nada
module.exports = Order;
