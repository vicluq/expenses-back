class ExpensesService {
    constructor(expenses) {
        this._userExpenses = expenses || [];
    }

    getAll() {
        return this._userExpenses;
    }

    getById(id) {
        return this._userExpenses.filter(exp => exp.id === id)[0];
    }

    add(expense) {
        this._userExpenses.push(expense);
    }

    addMany(expenses) {
        expenses.forEach(exp => {
            this._userExpenses.push(exp);
        });
    }

    update(expenseData) {
        const { _id } = expenseData;
        const index = this._userExpenses.findIndex(exp => exp._id === _id);
        
        const newExpenses = [].concat(this._userExpenses);
        newExpenses[index] = {...newExpenses[index], ...expenseData};
        this._userExpenses = newExpenses;
    }

    delete(id) {
      const newExpenses = [].concat(this._userExpenses);
      const indexToDelete = newExpenses.findIndex(exp => exp.id === id);
      
      newExpenses.splice(indexToDelete, 1);
      this._userExpenses = newExpenses; // Reasign
    }

    deleteMany(id_list) {
        const newExpenses = [].concat(this._userExpenses).filter(exp => {
            let dontDelete = true;

            // looping the ids to delete to see if ours is there
            for(let i = 0; i < id_list.length; ++i) {
                dontDelete = exp.id !== id_list[i];
                if(!dontDelete) break;
            }

            return dontDelete;
        });

        this._userExpenses = newExpenses;
    }
}

module.exports = new ExpensesService();