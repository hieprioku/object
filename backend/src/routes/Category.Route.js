const CategoryController = require("../controllers/category.controller.js");

const categoryRoute = (app) => {
  app.post("/api/v1/create-categories", CategoryController.create);
};

module.exports = categoryRoute;