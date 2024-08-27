import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionsList from './components/TransactionsList';
import Header from './components/Header';

import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:5173/api/transactions');
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/transactions/${id}`);
      fetchTransactions();
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const editTransaction = async (id) => {
    const newText = prompt('Enter new description:');
    const newAmount = prompt('Enter new amount:');
    if (newText && newAmount) {
      try {
        await axios.put(`/api/transactions/${id}`, {
          text: newText,
          amount: parseFloat(newAmount),
        });
        fetchTransactions();
      } catch (error) {
        console.error('Error editing transaction:', error);
      }
    }
  };

  return (
    <div className="container">
      <Header />
      <Balance transactions={transactions} />
      <IncomeExpenses transactions={transactions} />
      <TransactionsList
        transactions={transactions}
        onDelete={deleteTransaction}
        onEdit={editTransaction}
      />
      <AddTransaction setTransactions={setTransactions} />
    </div>
  );
};

export default App;