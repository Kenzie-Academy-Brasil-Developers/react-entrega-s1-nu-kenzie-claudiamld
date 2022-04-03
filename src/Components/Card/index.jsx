import { Button } from "../Button"
import TrashCan from './../../assets/trash-can.png'
import './style.css'

export const Card = ({description, valuePrice, transactionType}) => {
    console.log(valuePrice);
    return(
        <div className="Card">
            <h3 className="descriptionCard">{description}</h3>
            <p className="valuePriceCard">{valuePrice}</p>
            <Button className='removerButton'><img src={TrashCan} alt='deletar'></img></Button>
            <p className="transactionTypeCard">{transactionType}</p>
        </div>
    )
}