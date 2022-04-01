import { useState } from 'react'
import './style.css'

export const Form = ({listTransactions, setListTransactions}) => {

    const [description, setDescription] = useState('')
    const [valuePrice, setValuePrice] = useState('')
    const [transactionType, setTransactionType] = useState('')

    const handleAddTransactions = () => {

        const transaction = {
          description: description, 
          valuePrice: valuePrice,
          transactionType: transactionType
        }
        
        const newArr = [...listTransactions, transaction]
        setListTransactions(newArr)
    }

    return (
        <div className='cardForm'>
            <form>
                <label htmlFor="" className='description-label'>Descrição</label>
                <input 
                    className='description' 
                    placeholder='Digite aqui sua descrição' 
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <p>Ex.:Compra de roupas</p>

                <div className='valueType'>
                    <label htmlFor="">Valor</label>
                    <input 
                        className='valuePrice' 
                        placeholder='R$' 
                        value={valuePrice}
                        onChange={(event) => setValuePrice(event.target.value)}
                    />   
                </div>

                <div className='valueType'>
                    <label htmlFor="">Tipo de valor</label>
                    
                    <select 
                        className='type' 
                        value={transactionType} 
                        onChange={(event) => setTransactionType(event.target.value)}
                    >
                        <option value=''></option>
                        <option value='entrada'>Entrada</option>
                        <option value='saida'>Despesa</option>
                    </select>
                </div>
            </form>

            <button onClick={() => handleAddTransactions()}>Inserir valor</button>
        </div>
    )
}