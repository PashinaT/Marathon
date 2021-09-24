import {PokemonContext} from "../../../../context/PokemonContext";
import {useEffect,useState,useContext} from 'react'
import s from "./style.module.css";
import PokemonCard from "../../../../components/PokemonCard";
import {useHistory} from "react-router-dom";

const FinishPage = () => {
    const {pokemon,compPokemons} = useContext(PokemonContext);
    const history = useHistory();

    const handleButtonClick = ()=>{
        history.replace('/game');
    };

    return (
        <div >
            <div className={s.flex}>
                {Object.values(pokemon).map((item)=>(
                    <div style={{marginTop:'80px'}}>
                        <PokemonCard
                            className={s.card}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type ={ item.type}
                            values={item.values}
                            minimize
                            isActive
                        />
                    </div>
                ))}
            </div>
            <div style={{padding:'70px',zIndex:'1000', position: 'relative', display: 'inline-block'}}>
                <button className={s.button} onClick={handleButtonClick}>EndGame</button>
            </div>
            <div className={s.flex}>
                {compPokemons.map((item)=>(
                    <div style={{marginTop:'80px'}}>
                        <PokemonCard
                            className={s.card}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type ={ item.type}
                            values={item.values}
                            minimize
                            isActive
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinishPage;