import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import "./History.css"
import "tachyons"
import { Transaction } from './Transaction'

export const History = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div className="history mt3">
            <h3 className="history-header center">History</h3>
            <div className="bt mt2">
                <ul className="transaction list">
                    {transactions.map(transaction => (<Transaction transaction={transaction}/>))}
                </ul>
            </div>
        </div>
    )
}
