const mongoose = require("mongoose");

const Registry = mongoose.model("Registry");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const registries  = await Registry.paginate({}, { page, limit: 30 });

    return res.json(registries);
  },

  async register(req, res) {
    const registry = await Registry.create(req.body);

    return res.json(registry);
  }
}