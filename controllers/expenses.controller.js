const ExpensesService = require("../services/expenses.service");
const { validateExpense } = require("../utils/validations");

// OK
exports.getAll = function (req, res) {
  ExpensesService.getAll()
    .then((expenses) => {
      res.status(200).json(expenses);
    })
    .catch((err) => {
      res.status(500).send({ error: true, message: err });
    });
};

// OK
exports.getById = function (req, res) {
  ExpensesService.getById(req.params.id)
    .then((expense) => {
      res.status(200).json(expense);
    })
    .catch((err) => {
      res.status(500).send({ error: true, message: err });
    });
};

// OK 1/2 ( TODO add many )
exports.addExpense = function (req, res) {
  if (req.body.bulk) {
  } else {
    const expense = req.body.data;

    const error = validateExpense(expense);

    if (error) {
      return res.status(400).send({ error: true, message: error });
    }

    return ExpensesService.add(expense)
      .then((createdExpense) => {
        console.log(createdExpense);
        res.status(200).send({ createdExpense, error: false });
      })
      .catch((err) => {
        res.status(500).send({ error: true, message: err });
      });
  }
};

// OK
exports.updateExpense = function (req, res) {
  const expId = req.body.id;
  const data = req.body.data;

  const error = validateExpense(req.body.data, true);

  if (error) {
    return res.status(400).send({ error: true, message: error });
  }

  return ExpensesService.update(expId, data)
    .then((updatedExpense) => {
      console.log(updatedExpense);
      res.status(200).send({ updatedId: expId, error: false });
    })
    .catch((err) => {
      res.status(500).send({ error: true, message: err });
    });
};

// OK
exports.deleteExpense = function (req, res) {
  const expId = req.body.id;

  return ExpensesService.delete(expId)
    .then((deletedExpense) => {
      console.log(deletedExpense);
      res.status(200).send({ error: false });
    })
    .catch((err) => {
      res.status(500).send({ error: true, message: err });
    });
};
