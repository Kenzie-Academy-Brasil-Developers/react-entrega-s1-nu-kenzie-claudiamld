export const TotalMoney = ({totalValue}) => {
    return(
        <div>
            <div>
                <h3>Valor total:</h3>
                <span>O valor se refere ao saldo</span>
            </div>
            <div>
                $ {totalValue}
            </div>
        </div>
    )
}