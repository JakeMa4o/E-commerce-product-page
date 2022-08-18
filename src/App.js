import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [cartItem, setCartItem] = useState({});

  const [amount, setAmount] = useState(0);
  
  return (
    <div className="App">
      <Header cartItem={cartItem} setCartItem={setCartItem} amount={amount} setAmount={setAmount}/>
      <Main setCartItem={setCartItem} setAmount={setAmount} amount={amount}/>
    </div>
  );
}

export default App;
