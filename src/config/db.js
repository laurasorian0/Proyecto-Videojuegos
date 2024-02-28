const mongoose = require("mongoose");
const conectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Conectado a la base de datos 😛");
  } catch (error) {
    console.log("Algo ha salido mal 😫")
  }
}

module.exports = { conectDB }