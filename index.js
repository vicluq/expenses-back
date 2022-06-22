const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const expenses_controllers = require('./controllers/expenses.controller');

dotenv.config();
const app = express();

mongoose.connect(process.env.DB_URL_DEV);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ! GET requests
app.get('/expenses', expenses_controllers.getAll);

app.get('/expenses/:id', expenses_controllers.getById);

// ! POST requests
app.post('/expenses', expenses_controllers.addExpense);

// ! PUT requests
app.put('/expenses', expenses_controllers.updateExpense);

// ! DELETE requests
app.delete('/expenses', expenses_controllers.deleteExpense);

app.listen(process.env.PORT, () => {
    console.log('Server up and running on port 8080!');
}) 