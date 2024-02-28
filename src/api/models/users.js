const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  anoNacimiento: { type: Number, required: true, unique: true },
  rol: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user",
  },
  imagenPerfil: { type: String, required: true, unique: true },
}, {
  timestamps: true,
  collection: "users",
})

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
})

const User = mongoose.model("users", userSchema, "users");
module.exports = User;