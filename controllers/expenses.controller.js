const ExpensesService = require('../services/expenses');

exports.getAll = function (req, res) {
    return res.status(200).json(ExpensesService.getAll());
}

exports.getById = function (req, res) {
    return res.status(200).json(ExpensesService.getById(req.params.id));
}

exports.addExpense = function (req, res) {
    if (req.body.expenses) {
        if (req.body.expenses.length > 0) {
            const newExpenses = [...req.body.expenses].map((exp, index) => ({
                ...exp,
                _id: new Date().getTime() + index,
            }));

            ExpensesService.addMany(newExpenses);
            return res.status(200).json({ msg: "Operation Succesfull" });
        }
        else {
            return res.status(204).json({ msg: "Empty array" });
        }
    } else if (req.body.expense) {
        console.log("ADDING ONE");
        ExpensesService.add({ _id: new Date().getTime(), ...req.body.expense });
        return res.status(200).json({ msg: "Operation Succesfull", content: req.body.expense });
    }
}

// TODO return errors and messages from service methods

exports.deleteExpense = function (req, res) {
    if(req.body.expenses_ids) {
        ExpensesService.deleteMany(req.body.expenses_ids);
        return res.status(200).json({ msg: "Operation Succesfull" });
    }
    else if(req.body.expense_id) {
        ExpensesService.delete(req.body.expense_id);
        return res.status(200).json({ msg: "Operation Succesfull" });
    }
}

exports.updateExpense = function(req, res) {
    ExpensesService.update(req.body.data)
    return res.status(200).json({ msg: "Operation Succesfull", content: {} });
}

