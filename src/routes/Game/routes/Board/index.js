import s from './style.module.css';
import {PokemonContext} from "../../../../context/PokemonContext";
import {useContext} from 'react'
import PokemonCard from "../../../../components/PokemonCard";
import f from "../Start/style.module.css";

const BoardPage = () => {
    const {pokemonContext} = useContext(PokemonContext)
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                { Object.values(pokemonContext).map(({id,active,name,img,type,values})=>{
                    <PokemonCard isActive={active}  name={name} img={img} id={id} type ={ type} values={values}
                    />
                })}

            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;