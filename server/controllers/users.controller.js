// Models
const { User } = require("../models/user.model");
const { Order } = require("../models/order.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    where: { status: "active" },
  });

  res.status(200).json({
    status: "success",
    data: { users },
  });
});

const getIdUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  res.status(200).json({
    status: "success",
    data: { user },
  });
});

const createUser = catchAsync(async (req, res, next) => {
  const { name, dress, email, dniType, dniNumber } = req.body;

  const newUser = await User.create({
    name,
    email,
    dress,
    dniType,
    dniNumber,
  });

  // 201 -> Success and a resource has been created
  res.status(201).json({
    status: "success",
    data: { newUser },
  });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  const { user } = req;

  await user.update({ name });

  res.status(200).json({
    status: "success",
    data: { user },
  });
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  await user.update({ status: "deleted" });

  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getIdUser,
};
