const ExpenseModel = require("../models/expense.model");

class ExpensesService {
  getAll() {
    return ExpenseModel.find(); // exec() tem mais controle da promisse
  }

  getById(id) {
    return ExpenseModel.findById(id);
  }

  add(expense) {
    const exp = new ExpenseModel(expense);
    return exp.save();
  }

  update(id, data) {
    return ExpenseModel.updateOne({ _id: id }, { ...data });
  }

  delete(id) {
    return ExpenseModel.deleteOne({ _id: id });
  }
}

module.exports = new ExpensesService();
