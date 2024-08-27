import express from 'express';
import ViteExpress from 'vite-express';
import handlerFunctions from './controller.js';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.get('/api/transactions', handlerFunctions.getTransactions);
app.post('/api/transactions', handlerFunctions.addTransaction);
app.delete('/api/transactions/:id', handlerFunctions.deleteTransaction);
app.put('/api/transactions/:id', handlerFunctions.editTransaction);

// Use ViteExpress to listen on port 5173
ViteExpress.listen(app, 5173, () => {
  console.log('Server running on http://localhost:5173');
});
