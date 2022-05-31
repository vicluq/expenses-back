const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const expenses_controllers = require('./controllers/expenses.controller');

dotenv.config();
const app = express();

// Middlewares
app.use(cors({ origin: 'https://localhost:8080/' }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// GET requests
app.get('/expenses', expenses_controllers.getAll);

app.get('/expenses/:id', expenses_controllers.getById);

// POST requests
app.post('/expenses', expenses_controllers.addExpense);

// PUT
app.put('/expenses', expenses_controllers.updateExpense);

// DELETE
app.delete('/expenses', expenses_controllers.deleteExpense);

app.listen(process.env.PORT, () => {
    console.log('Server up and running on port 8080!');
}) 