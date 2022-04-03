import { Card } from "../Card"
import './style.css'

export const List = ({listTransactions}) => {
    
    console.log(listTransactions);

    return(
        <div className="cardsList">
            {listTransactions.map((transaction, index) =>  (
                <Card
                    key={index} 
                    description={transaction.description} 
                    valuePrice={transaction.valuePrice}
                    transactionType={transaction.transactionType} 
                />
            ))}
        </div>
    )
}