import React, { useContext } from 'react'
import './Balance.css'
import { GlobalContext } from '../context/GlobalState'
export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);
    return (
        <div className="total_balance bb mt3 mb4 pl2 pr2 pt3 pb2">
            <h3 className="balance pl2">YOUR BALANCE</h3>
            <span className="b green f4">{ total } Rs</span>
        </div>
    )
}
