import { useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { Header } from './Components/Header';

function App() {

  const [listTransactions, setListTransactions] = useState([
    // {description: "Salário recebido", transactionType: "entrada", valuePrice: 2500},
    // {description: "Conta de luz", transactionType: "saída", valuePrice: -150},
  ])

  
  console.log(listTransactions);

  return (
    <div className="App">
      <div className="App-body">
        <Header />
        <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
      </div>
    </div>
  );
}

export default App;
