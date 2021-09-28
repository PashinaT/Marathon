import {PokemonContext} from "../../../../context/PokemonContext";
import {useEffect,useState,useContext} from 'react'
import s from "./style.module.css";
import PokemonCard from "../../../../components/PokemonCard";
import {useHistory} from "react-router-dom";
import {FireBaseContext} from "../../../../context/FireBaseContext";
import {useDispatch} from "react-redux";
import {addPokemonAsync} from "../../../../store/pokemons";

const FinishPage = () => {
    const {pokemon,compPokemons} = useContext(PokemonContext);
    const [chosenCard, setChosenCard] = useState(null);
    const dispatch =useDispatch();
    const history = useHistory();

    const handleButtonClick = ()=>{
        dispatch(addPokemonAsync(chosenCard));
        history.replace('/game');
    };

    const choseCard = (item)=>{
        setChosenCard(item);

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
                    <div style={{marginTop:'80px'}} onClick={()=>choseCard(item)}>
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