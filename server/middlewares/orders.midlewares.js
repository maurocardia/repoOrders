// Models
const { Order } = require("../models/order.model");
const { User } = require("../models/user.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const orderUserExist = catchAsync(async (req, res, next) => {
  const { code } = req.params;
  const { dniNumber, dniType } = req.body;

  const order = await Order.findOne({
    attributes: { exclude: ["password"] },
    where: { code },
    include: [
      {
        model: User,
        attributes: ["dniNumber", "id", "name", "dniType"],
      },
    ],
  });
  //console.log(order.user.dniNumber)
  // If user doesn't exist, send error message
  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  if (
    parseInt(order.user.dniNumber) === parseInt(dniNumber) &&
    dniType === order.user.dniType
  ) {
    // req.anyPropName = 'anyValue'
    req.order = order;
    next();
  } else {
    return next(new AppError("This order no exist", 404));
  }
});

const orderExist = catchAsync(async (req, res, next) => {
  const { code } = req.params;

  const order = await Order.findOne({
    attributes: { exclude: ["password"] },
    where: { code },
    include: [
      {
        model: User,
        attributes: ["dniNumber", "id", "name", "dniType", "dress"],
      },
    ],
  });

  // If order doesn't exist, send error message
  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  // req.anyPropName = 'anyValue'
  req.order = order;
  next();
});

module.exports = {
  orderExist,
  orderUserExist,
};
