const mongoose = require("mongoose");

const { Schema } = mongoose;

const userModel = new Schema({
  firstName: String,
  lastName: String,
  authToken: String,
  email: String,
  password: String,
  picture: String,
  admin: Boolean,
  creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('users', userModel);