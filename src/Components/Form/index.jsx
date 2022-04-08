import { useState } from 'react'
import {Button} from './../Button/index'
import './style.css'

export const Form = ({listTransactions, setListTransactions}) => {

    const [description, setDescription] = useState('')
    const [valuePrice, setValuePrice] = useState(0)
    const [transactionType, setTransactionType] = useState('')

    const handleAddTransactions = () => {
        let newId;
        listTransactions.length < 1 ? newId = 1 : newId = listTransactions.length +1

        if(valuePrice > 0){
            const transaction = {
                id: newId,
                description: description, 
                valuePrice: Number(valuePrice), 
                transactionType: transactionType
            }
            const newArr = [...listTransactions, transaction]
            setListTransactions(newArr)
        }

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
                <p className='spanExemploForm'>Ex.:Compra de roupas</p>

                <div className='valueType'>
                    <label htmlFor="">Valor</label>
                    <input 
                        className='valuePrice' 
                        placeholder='R$' 
                        value={valuePrice}
                        type= 'number'
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
                        <option value='Entrada'>Entrada</option>
                        <option value='Despesa'>Despesa</option>
                    </select>
                </div>
            </form>
            
            <Button onClick={handleAddTransactions} className='formButton' >Inserir valor</Button>
        </div>
    )
}