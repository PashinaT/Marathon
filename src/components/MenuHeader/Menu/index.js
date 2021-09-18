import s from "./style.module.css"
import cn from 'classnames'
import {Link} from 'react-router-dom'

const Menu =({isActive})=>{
    return(
        <div className={cn(s.menuContainer, {[s.active]: isActive === true,
                                             [s.deactive]: isActive === false})}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    <li>
                        <Link to="/home">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/game">
                            GAME
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Menu