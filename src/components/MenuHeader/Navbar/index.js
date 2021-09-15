import s from "./style.module.css"
import cn from 'classnames'

const Navbar =({handleClick, isActive})=>{
    return(
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div onClick={handleClick} className={cn(s.menuButton,{ [s.active]:isActive})}>
                    <span/>
                </div>
            </div>
        </nav>
    )
};

export default Navbar