const { isAuth } = require("../../middlewares/auth");
const { getJuegos, getJuegosByCategory, getJuegosByPrice, getJuegosbyId, putJuego, postJuego, deleteJuego, getJuegosAdmin } = require("../controllers/juegos");

const juegosRouter = require("express").Router();

juegosRouter.get("/not-verified", getJuegosAdmin);
juegosRouter.get("/precio/:precio", getJuegosByPrice);
juegosRouter.get("/categoria/:categoria", getJuegosByCategory);
juegosRouter.get("/:id", getJuegosbyId);
juegosRouter.get("/", getJuegos);
juegosRouter.post("/", [isAuth], postJuego);
juegosRouter.put("/:id", [isAuth], putJuego);
juegosRouter.delete("/:id", [isAuth], deleteJuego);

module.exports = juegosRouter;