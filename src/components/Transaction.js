import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount <0? '-' : '+';
    return (
        <li className={transaction.amount < 0? 'minus':'plus'}>
    <p className="b pl2">{transaction.text}</p>
    <span>{sign}{Math.abs(transaction.amount)} Rs</span>
                        {/* Plus for income/debit
                            minus for expense/credit */}
                        <button
                        onClick={() => deleteTransaction(transaction.id)}
                        className="remove-btn b">x</button>
                    </li>
    )
}
