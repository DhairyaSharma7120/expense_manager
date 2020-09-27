import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import { ExpenseAndIncome } from './components/ExpenseAndIncome';
import { Header } from './components/Header';
import { History } from './components/History';
import "tachyons"
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Balance />
        <ExpenseAndIncome />
        <History />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
