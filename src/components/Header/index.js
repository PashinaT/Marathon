import s from "./style.module.css"
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {plusAction, selectCount} from "../../store/counter";
const Header =({title,descr, onClickButton})=>{
    const history = useHistory();
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    console.log("fffff");
    console.log(count);

    const handleClick = () =>{
        // onClickButton && onClickButton('game');
        history.push('/game');
        // dispatch(plusAction(1))
    };

    return(
        <header className={s.root}>
            <div className={s.forest}>
            </div>
            <div className={s.silhouette }/>
            <div className={s.moon }/>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button onClick={handleClick}>
                    Start Game
                </button>
            </div>
        </header>
    )
};

export default Header