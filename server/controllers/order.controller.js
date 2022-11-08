// Models
const { User } = require("../models/user.model");
const { Order } = require("../models/order.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const getAllOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.findAll({
    where: { status: "active" },
  });

  res.status(200).json({
    status: "success",
    data: { orders },
  });
});

const sendIdOrder = catchAsync(async (req, res, next) => {
  const { order } = req;

  res.status(200).json({
    status: "success",
    data: { order },
  });
});

const createOrder = catchAsync(async (req, res, next) => {
  const { dateDelivery, code, userId } = req.body;

  const newOrder = await Order.create({
    dateDelivery,
    code,
    userId,
  });

  // 201 -> Success and a resource has been created
  res.status(201).json({
    status: "success",
    data: { newOrder },
  });
});

const updateOrder = catchAsync(async (req, res, next) => {
  const { order } = req;

  await order.update({ status: delivered });

  res.status(200).json({
    status: "success",
    data: { order },
  });
});

const deleteOrder = catchAsync(async (req, res, next) => {
  const { order } = req;

  await order.update({ status: "deleted" });

  res.status(204).json({ status: "success" });
});

const getIOrder = catchAsync(async (req, res, next) => {
  const { order } = req;

  res.status(200).json({
    status: "success",
    data: { order },
  });
});

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  sendIdOrder,
  getIOrder,
};
