// Generador de llaves

const jwt = require("jsonwebtoken");

const generateSign = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1y" })
}

// esta función me sirve para ver si la llave la hemos hecho nosotros:

const verifyJwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { generateSign, verifyJwt }