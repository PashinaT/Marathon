import {PokemonContext} from "../../../../context/PokemonContext";
import {useEffect,useState,useContext} from 'react'
import s from "./style.module.css";
import PokemonCard from "../../../../components/PokemonCard";
import {useHistory} from "react-router-dom";
import {FireBaseContext} from "../../../../context/FireBaseContext";
import {useDispatch, useSelector} from "react-redux";
import {addPokemonAsync} from "../../../../store/pokemons";
import {selectChosenPokemonsData,selectCompPokemonsData} from "../../../../store/pokemons";
import {selectResult} from "../../../../store/result";

const FinishPage = () => {


    const chosenPokemonsRedux = useSelector(selectChosenPokemonsData);
    const compPokemonsRedux = useSelector(selectCompPokemonsData);
    const result = useSelector(selectResult);
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
                {Object.values(chosenPokemonsRedux).map((item)=>(
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
                <button className={s.button} disabled={result==="win" && chosenCard===null} onClick={handleButtonClick}>EndGame</button>
            </div>
            <div className={s.flex}>
                {compPokemonsRedux.map((item)=>(
                    <div style={{marginTop:'80px'}} onClick={()=>result==="win"?choseCard(item):console.log("no")}>
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