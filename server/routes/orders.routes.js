const express = require('express');

// Controllers
const {
	getAllOrders,
	createOrder,
	updateOrder,
	deleteOrder,
	getIOrder,
	sendIdOrder
} = require('../controllers/order.controller');

// Middlewares
const { orderExist,orderUserExist } = require('../middlewares/orders.midlewares');


const ordersRouter = express.Router();

ordersRouter.post('/',createOrder );


ordersRouter.get('/',getAllOrders);
ordersRouter.get('/:code',orderExist,getIOrder);

ordersRouter.post('/:code',orderUserExist,sendIdOrder );

ordersRouter.patch('/:id', orderExist, updateOrder);

ordersRouter.delete('/:id', orderExist,deleteOrder  );

module.exports = { ordersRouter };
