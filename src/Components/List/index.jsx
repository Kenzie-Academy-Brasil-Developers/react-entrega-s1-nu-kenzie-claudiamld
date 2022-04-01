import { Card } from "../Card"

export const List = ({listTransactions}) => {
    return(
        <div>
            {listTransactions.map((transaction, index) =>  <Card transaction={transaction} key={index} /> )}
        </div>
    )
}