const AuthController = require("../controllers/auth.controller");

const authRoute = (app) => {

  app.post("/api/v1/auth/signup", AuthController.signup);
  
  app.post("/api/v1/auth/login", AuthController.login);
};

module.exports = authRoute;