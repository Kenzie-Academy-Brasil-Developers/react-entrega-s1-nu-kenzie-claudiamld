import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { Header } from './Components/Header';
import { Button } from './Components/Button';
import { List } from './Components/List';
import { TotalMoney } from './Components/TotalMoney';

function App() {

  const [listTransactions, setListTransactions] = useState([])
  const [balance, setBalance] = useState(0)

  const balanceCalculate = () => {
    const receives = listTransactions.filter(transaction => transaction.transactionType === 'Entrada').reduce((acc, currValue) => currValue.valuePrice + acc, 0)
    const withdraws = listTransactions.filter(transaction => transaction.transactionType === 'Despesa').reduce((acc, currValue) => currValue.valuePrice + acc, 0)
    const result = receives - withdraws
    setBalance(result)
  }

  useEffect(() => {
    balanceCalculate()
  }, [listTransactions])

  return (
    <div className="App">
        <Header />
      <div className="App-body">

      <div>
        <div className='formBox'>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
        </div>
        <TotalMoney totalValue={balance} />
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
