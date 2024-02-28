const Juego = require("../models/juegos")


const getJuegos = async (req, res, next) => {
  try {
    const juegos = await Juego.find({ verified: true });
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getJuegosAdmin = async (req, res, next) => {
  try {
    const juegos = await Juego.find({ verified: false });
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getJuegosbyId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juego = await Juego.findById(id);
    return res.status(200).json(juego);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getJuegosByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const juegos = await Juego.find({ categoria });
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getJuegosByPrice = async (req, res, next) => {
  try {
    const { precio } = req.params;
    const juegos = await Juego.find({ precio: { $lt: precio } });
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json(error);
  }
}

const postJuego = async (req, res, next) => {
  try {
    const newJuego = new Juego(req.body);

    if (req.user.rol === "admin") {
      newJuego.verified = true;
    } else {
      newJuego.verified = false;
    }

    const juegoSaved = await newJuego.save();
    return res.status(201).json(juegoSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
}

const putJuego = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newJuego = new Juego(req.body);
    newJuego._id = id;
    const juegoUpdated = await Juego.findByIdAndUpdate(id, newJuego, { new: true });
    return res.status(200).json(juegoUpdated);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const deleteJuego = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juegoDeletd = await Juego.findByIdAndDelete(id);
    return res.status(200).json(juegoDeletd);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

module.exports = { getJuegos, getJuegosByCategory, getJuegosByPrice, getJuegosbyId, postJuego, putJuego, deleteJuego, getJuegosAdmin }