import s from "./style.module.css"
import cn from 'classnames'
import {ReactComponent as LoginSVG} from "../../../assets/login.svg";
import {ReactComponent as UserSVG} from "../../../assets/user.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectUserLoading, selectUserLocalId, removeUser} from "../../../store/users";
import {Link} from 'react-router-dom'

const Navbar =({handleClick, onClickLogin,isActive, bgActive=false})=>{

    const isLoadingUser = useSelector(selectUserLoading);
    const localId = useSelector(selectUserLocalId);
    const dispatch =useDispatch();

    const onClickLogOut = () =>{
        dispatch(removeUser())
    };

    return(
        <nav className={cn(s.root,{[s.bgActive]:bgActive})}>
            <div className={s.navWrapper}>
                <div className={s.brand}>
                    LOGO
                </div>
                <div className={s.loginAndMenu}>
                    {(!isLoadingUser && !localId) &&
                        <div className={s.loginWrap} onClick={onClickLogin}>
                            <LoginSVG/>
                        </div>
                    }
                    {(!isLoadingUser && localId) &&
                    <Link className={s.loginWrap} to={'/login'}>
                        <UserSVG/>
                    </Link>
                    }
                    {(!isLoadingUser && localId) &&
                    <div className={s.loginWrap} onClick={onClickLogOut}>
                        <LoginSVG/>
                    </div>
                    }
                    <div onClick={handleClick} className={cn(s.menuButton,{ [s.active]:isActive})}>
                        <span/>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar