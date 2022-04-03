import { useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { Header } from './Components/Header';
import { Button } from './Components/Button';
import { List } from './Components/List';

function App() {

  const [listTransactions, setListTransactions] = useState([
    // {description: "Salário recebido", transactionType: "entrada", valuePrice: 2500},
    // {description: "Conta de luz", transactionType: "saída", valuePrice: -150},
  ])

  console.log(listTransactions);
  return (
    <div className="App">
        <Header />
      <div className="App-body">

        <div className='formBox'>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
        </div>

        <div className='cardsVitrine'>
          <div className='btnFiltros'>
            <h3 className='resumoFinanceiro'>Resumo financeiro</h3>
            <Button className='btnTodos'>Todos</Button>
            <Button className='grayButton'>Entradas</Button>
            <Button className='grayButton'>Despesas</Button>
          </div>
          <List listTransactions={listTransactions} />

        </div>
        
      </div>

    </div>
  );
}

export default App;
