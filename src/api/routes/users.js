const { isAdmin } = require("../../middlewares/auth");
const { getUsers, register, login } = require("../controllers/users");

const userRoutes = require("express").Router();

userRoutes.get("/", [isAdmin], getUsers);
userRoutes.post("/register", register);
userRoutes.post("/login", login);

module.exports = userRoutes;