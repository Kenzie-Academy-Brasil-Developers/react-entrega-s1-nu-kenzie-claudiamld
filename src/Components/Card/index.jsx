import { Button } from "../Button"
import TrashCan from './../../assets/trash-can.png'
import './style.css'

export const Card = ({className, listTransactions, setListTransactions, id, description, valuePrice, transactionType}) => {

    const handleRemove = (value) => {
        const newArr = listTransactions.filter(
        (transaction) => transaction.id !== value);
        setListTransactions(newArr)
    }

    return(
        <div className={className}>
            <h3 className="descriptionCard">{description}</h3>
            <p className="valuePriceCard"> R$ {valuePrice},00 </p>
            <Button className='removerButton' onClick={() => handleRemove(id)}>
                <img src={TrashCan} alt='deletar'></img>
            </Button>
            <p className="transactionTypeCard">{transactionType}</p>
        </div>
    )
}