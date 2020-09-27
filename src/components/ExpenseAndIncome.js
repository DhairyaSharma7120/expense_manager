import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import "./ExpenseAndIncome.css"
export const ExpenseAndIncome = () => {

    const { transactions } = useContext(GlobalContext);
    
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item),0)
    .toFixed(2);

    const expense = (
        amounts.filter(item =>item<0).reduce((acc,item) => (acc += item) ,0) * -1)
        .toFixed(2);

    return (
        <div className='total_box'>
            <div className="income pt4 pb4">
                <h3 className="pb4">INCOME</h3>
                <span className="green">+{income} Rs</span>
            </div>
            <div className="expense pt4 pb4">
                <h3 className="pb4">EXPENSE</h3>
                <span className="red">-{expense} Rs</span>
                </div>            
        </div>
    )
}
