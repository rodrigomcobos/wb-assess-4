import React, { useState } from 'react';
import axios from 'axios';

// Below is the code after trying to fetch data from an API
const AddTransaction = ({ setTransactions }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5173/api/transactions', {
                text,
                amount: parseFloat(amount)
            });
            setTransactions(prevTransactions => [...prevTransactions, response.data]);
            setText('');
            setAmount('');
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    };

    return (
        <div className="add-transaction">
            <h3>Add new Transaction</h3>
            <p>(Enter a negative number by adding "-"to subtract from your balance and a positive number to add to your balance)</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Transaction Name
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Amount
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;