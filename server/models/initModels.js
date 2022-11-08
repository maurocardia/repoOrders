// Models
const { User } = require("./user.model");
const { Order } = require("./order.model");

const initModels = () => {
  User.hasMany(Order, { foreignKey: "userId" });
  Order.belongsTo(User);

  Order.belongsTo(User, { foreignKey: "userId" });
};

module.exports = { initModels };
