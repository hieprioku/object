const authRoute = require("./Auth.Route");
const productRoute = require("./Product.Route");
const categoryRoute = require("./Category.Route");
const cartRoute = require("./Cart.route");
const UserRoute = (app) => {
  authRoute(app);
  productRoute(app);
  categoryRoute(app);
  cartRoute(app);
};
module.exports = UserRoute;