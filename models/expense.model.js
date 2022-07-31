const mongoose = require("mongoose");

const { Schema } = mongoose;

const expenseModel = new Schema({
  title: String,
  description: String,
  value: Number,
  payment: { type: String, default: 'credit' },
  installments: Number,
  category: String,
  origin: String,
  userId: { type: Schema.Types.ObjectId, ref: "users" },
  accountId: { type: Schema.Types.ObjectId, ref: "Accounts" },
});

// se a propriedade for um array, botariamos colchetes envolvendo

// Exportamos o model (é uma classe com metodos para fazer queries na colection) criado a partir do schema
module.exports = mongoose.model("expenses", expenseModel);
