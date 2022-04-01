import { useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { Header } from './Components/Header';
import { Button } from './Components/Button';

function App() {

  const [listTransactions, setListTransactions] = useState([
    // {description: "Salário recebido", transactionType: "entrada", valuePrice: 2500},
    // {description: "Conta de luz", transactionType: "saída", valuePrice: -150},
  ])


  return (
    <div className="App">
      <div className="App-body">
        <Header />
        <div className='formBox'>

          <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />

          <div className='btnFiltros'>
            <h3>Resumo financeiro</h3>
            <Button className='btnTodos'>Todos</Button>
            <Button className='grayButton'>Entradas</Button>
            <Button className='grayButton'>Despesas</Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
