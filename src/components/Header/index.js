import s from "./style.module.css"
import MenuHeader from "../MenuHeader";
const Header =({title,descr, onClickButton})=>{
    const handleClick = () =>{
        onClickButton && onClickButton('game');
    }
    return(
        <header className={s.root}>
            <div className={s.forest}>
            </div>
            <div className={s.container}>
                <MenuHeader/>
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