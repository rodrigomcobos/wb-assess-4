import React from 'react';

// Component to render individual transactions with edit and delete functionality
const Transactions = ({ transaction, onDelete, onEdit }) => {
    const handleDelete = () => {
        onDelete(transaction.id);
    };

    const handleEdit = () => {
        onEdit(transaction.id);
    };

    return (
        <li className="transaction-item">
            {transaction.text} <span className={transaction.amount > 0 ? 'plus' : 'minus'}>${transaction.amount.toFixed(2)}</span>
            <div className="buttons">
                <button className="edit-btn" onClick={handleEdit}>Edit</button>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
};

export default Transactions;