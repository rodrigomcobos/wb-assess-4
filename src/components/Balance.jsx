import React from 'react';


//Below is using an API call
const Balance = ({ transactions }) => {
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    return (
        <div className="balance">
            <h2>Your Balance</h2>
            <h1>${total.toFixed(2)}</h1>
        </div>
    );
};

export default Balance;