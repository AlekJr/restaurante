const MenuItem = require("../models/MenuItem");

module.exports = {
  // Endpoint para visualizar todos os itens do cardápio
  async getAll(req, res) {
    try {
      const menuItems = await MenuItem.findAll();
      res.json(menuItems);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao obter os itens do cardápio" });
    }
  },
};
