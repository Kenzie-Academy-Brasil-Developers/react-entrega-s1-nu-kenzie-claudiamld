import { Card } from "../Card"
import './style.css'

export const List = ({listTransactions, setListTransactions}) => {

    console.log(listTransactions);
    return(
        <div className="cardsList">
            {listTransactions.map((transaction, index) =>  (
                <Card
                    key={index} 
                    id={transaction.id}
                    className={transaction.transactionType === 'Entrada' ? 'cardActive' : 'card'}
                    description={transaction.description} 
                    valuePrice={transaction.valuePrice}
                    transactionType={transaction.transactionType} 
                    setListTransactions={setListTransactions}
                    listTransactions={listTransactions}
                    />
                    ))}
        </div>
    )
}