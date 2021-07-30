const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const usersSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  phone: Number,
});
const Users = new model("Users", usersSchema);

module.exports = Users;
