const ProductController = require("../controllers/product.controller.js");

const productRoute = (app) => {
  app.get("/api/v1/products", ProductController.getAllProduct);
  app.get("/api/v1/products/:id", ProductController.getProductById);
  app.post("/api/v1/products", ProductController.create);
};

module.exports = productRoute;