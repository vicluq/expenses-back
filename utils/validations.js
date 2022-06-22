exports.validateExpense = function (expenseBody, isUpdate) {
  let error = "";
  if (isUpdate) {
    // TODO validate each field
    return error;
  } else {
    if (!expenseBody) {
      error = "should send data body";
      return error;
    }

    if (!expenseBody.title || !expenseBody.value || !expenseBody.type) {
      error = "fill in all the required fields";
      return error;
    }
  }
};
