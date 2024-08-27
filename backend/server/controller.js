// backend/server/controller.js

let TEST_DATA = [
  { id: 1, text: 'Groceries', amount: -50 },
  { id: 2, text: 'Salary', amount: 500 },
  { id: 3, text: 'Book Sale', amount: 20 },
  { id: 4, text: 'Electricity Bill', amount: -100 },
];

const handlerFunctions = {
  // Get all transactions
  getTransactions: (req, res) => {
    res.json(TEST_DATA); // Simplified response to match expected format
  },

  // Add a new transaction
  addTransaction: (req, res) => {
    const { text, amount } = req.body;
    const id = TEST_DATA.length ? TEST_DATA[TEST_DATA.length - 1].id + 1 : 1;
    const newTransaction = { id, text, amount };
    TEST_DATA.push(newTransaction);
    res.status(201).json(newTransaction);
  },

  // Delete a transaction by ID
  deleteTransaction: (req, res) => {
    const { id } = req.params;
    TEST_DATA = TEST_DATA.filter(
      (transaction) => transaction.id !== parseInt(id)
    );
    res.status(204).end();
  },

  editTransaction: (req, res) => {
    const { id } = req.params;
    const { text, amount } = req.body;

    let transaction = TEST_DATA.find(
      (transaction) => transaction.id === parseInt(id)
    );
    if (transaction) {
      transaction.text = text || transaction.text;
      transaction.amount = amount || transaction.amount;
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  },
};

export default handlerFunctions;
