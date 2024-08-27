import React from 'react';


//Below is after using an API call
const IncomeExpenses = ({ transactions }) => {
    const income = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const expense = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    return (
        <div className="income-expense">
            <div>
                <h3>Income</h3>
                <div className="money plus">${income.toFixed(2)}</div>
            </div>
            <div>
                <h3>Expense</h3>
                <div className="money minus">${Math.abs(expense).toFixed(2)}</div>
            </div>
        </div>
    );
};

export default IncomeExpenses;