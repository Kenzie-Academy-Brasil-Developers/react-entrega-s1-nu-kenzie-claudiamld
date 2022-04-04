import './style.css'

export const TotalMoney = ({totalValue}) => {
    return(
        <div className="boxTotalMoney">
            <div>
                <h3 className='valueTitle'>Valor total:</h3>
                <span className='spanValue'>O valor se refere ao saldo</span>
            </div>
            <div className='totalValue'>
                $ {totalValue}
            </div>
        </div>
    )
}