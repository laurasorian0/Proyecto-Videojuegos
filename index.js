require("dotenv").config();

const express = require("express");

const { conectDB } = require("./src/config/db");
const juegosRouter = require("./src/api/routes/juegos");
const plataformasRouter = require("./src/api/routes/plataformas");
const userRoutes = require("./src/api/routes/users");

const app = express();

app.use(express.json());

conectDB();

app.use("/api/v1/juegos", juegosRouter);
app.use("/api/v1/plataformas", plataformasRouter);
app.use("/api/v1/users", userRoutes);

app.use("*", (req, res, next) => {
  return res.status(400).json("Route not found");
})

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000 😃");
})