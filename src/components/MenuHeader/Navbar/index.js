import s from "./style.module.css"
import cn from 'classnames'
import {ReactComponent as LoginSVG} from "../../../assets/login.svg";

const Navbar =({handleClick, onClickLogin,isActive, bgActive=false})=>{


    return(
        <nav className={cn(s.root,{[s.bgActive]:bgActive})}>
            <div className={s.navWrapper}>
                <div className={s.brand}>
                    LOGO
                </div>
                <div className={s.loginAndMenu}>
                    <div className={s.loginWrap} onClick={onClickLogin}>
                        <LoginSVG/>
                    </div>
                    <div onClick={handleClick} className={cn(s.menuButton,{ [s.active]:isActive})}>
                        <span/>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar