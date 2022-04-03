import { Card } from "../Card"
import './style.css'

export const List = ({listTransactions, setListTransactions}) => {

    return(
        <div className="cardsList">
            {listTransactions.map((transaction, index) =>  (
                <Card
                    key={index} 
                    id={transaction.id}
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