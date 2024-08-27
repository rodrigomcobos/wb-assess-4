import React from 'react';
import Transactions from './Transactions';

// Component to list all transactions with delete and edit functionality
const TransactionsList = ({ transactions, onDelete, onEdit }) => {
    return (
        <div className="transactions">
            <h3>Current Transactions</h3>
            <ul>
                {transactions.map((transaction) => (
                    <Transactions
                        key={transaction.id}
                        transaction={transaction}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TransactionsList;