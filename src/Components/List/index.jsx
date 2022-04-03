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
                    valuePrice={ `R$ ${transaction.valuePrice},00`} 
                    transactionType={transaction.transactionType} 
                />
            ))}
        </div>
    )
}