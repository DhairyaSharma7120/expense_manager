import React , { useState, useContext }from 'react'
import { GlobalContext } from '../context/GlobalState'
import "./AddTransaction.css"

export const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()* 100000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <div className="center new-transaction mt4">
            <h3 className="transaction-sheader">Add New Transaction</h3>
            <div className="add-transaction bt mt2 ">
                <form className="mt3"
                onSubmit={onSubmit}
                >
                <div className="input pa2">
                <label className="b pb1">Text</label>
                <input 
                className=""
                value = {text}
                onChange = {(e) => setText(e.target.value)} 
                type="text"
                name="add"
                placeholder="Enter Text.."/>
                </div>
                <div className="input pa2">
                <label className="b pb1">Amount</label>
                <span>(Before amount add '-' for expense and '+' for income )</span>
                <input 
                className=""
                value = {amount}
                onChange = {(e) => setAmount(e.target.value)}
                type="number"
                name="Amount"
                placeholder="Enter Amount.."/>
                 </div>

                 <button type="submit" className="add-btn br0 bw0 mt3 pa3">Add Transaction</button>
                 </form>
            </div>
        </div>
    )
}
