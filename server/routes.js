const express = require("express");
const routes = express.Router();

const RegistryController = require("./controllers/RegistryController");

routes.get('/registries', RegistryController.index);
// routes.get('/registries/:id', ProductController.show);
routes.post('/register', RegistryController.register);
// routes.put('/products/:id', ProductController.update);
// routes.delete('/products/:id', ProductController.destroy);


module.exports = routes;