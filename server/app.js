const express = require("express");
const cors = require("cors");
const path = require("path");

// Routers
const { usersRouter } = require("./routes/users.routes");
const { ordersRouter } = require("./routes/orders.routes");

// Controllers
const { globalErrorHandler } = require("./controllers/error.controller");

// Init our Express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,DELETE,POST");
  res.header("Access-Control-Allow-Headers", "*");

  app.use(cors());
  next();
});

// Define endpoints
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/orders", ordersRouter);
app.use("/", (req, res, next) => {
  //C:\Users\mauricio carvajal\Desktop\prueba tecnica\server\dist\index.html
  const indexPath = path.join(__dirname, "public", "index.html");
  res.status(200).sendFile(indexPath);
});

// Global error handler
app.use(globalErrorHandler);

// Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
