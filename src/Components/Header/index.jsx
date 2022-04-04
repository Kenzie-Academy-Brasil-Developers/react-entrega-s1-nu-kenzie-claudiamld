import './style.css'
import {Button} from './../Button/index'

export const Header = () => {
    return (
        <div className="Header">
            <h1>Nu <span className='Kenzie'>Kenzie</span></h1>
            <Button className='headerButton'>Início</Button>
        </div>
    )
}