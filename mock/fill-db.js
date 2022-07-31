const path = require("path");

const mongoose = require("mongoose");
const UserModel = require("../models/user.model");
const users = require("./user.json");

const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../.env") });

mongoose.connect(process.env.DB_URL_DEV);

UserModel.deleteMany({})
  .then((value) => {
    UserModel.insertMany(users)
      .then((value) => {
        console.log("[ADDED USERS]: ", users);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
