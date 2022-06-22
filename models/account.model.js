const mongoose = require("mongoose");

const { Schema } = mongoose;

const accountModel = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "users" },
  name: String,
  totalBalance: Number,
});

module.exports = mongoose.model("accounts", accountModel);
