const { isAuth, isAdmin } = require("../../middlewares/auth");
const { getPlataformasbyId, getPlataformas, postPlataforma, putPlataforma, deletePlataforma } = require("../controllers/plataformas");


const plataformasRouter = require("express").Router();


plataformasRouter.get("/:id", getPlataformasbyId);
plataformasRouter.get("/", getPlataformas);
plataformasRouter.post("/", [isAuth], postPlataforma);
plataformasRouter.put("/:id", [isAdmin], putPlataforma);
plataformasRouter.delete("/:id", [isAdmin], deletePlataforma);

module.exports = plataformasRouter;