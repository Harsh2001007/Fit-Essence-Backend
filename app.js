const express = require("express");
const exerciseRoutes = require("./routes/exerciseRoutes");
const app = express();

// 1) MIDDLEWARES

app.use(express.json());

// 3) ROUTES
app.use("/api/v1/exercise",exerciseRoutes);


module.exports = app;