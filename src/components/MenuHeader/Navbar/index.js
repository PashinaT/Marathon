import s from "./style.module.css"
import cn from 'classnames'

const Navbar =({handleClick, isActive, bgActive=false})=>{
    return(
        <nav className={cn(s.root,{[s.bgActive]:bgActive})}>
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