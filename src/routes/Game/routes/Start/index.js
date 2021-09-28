import f from "./style.module.css";
import {useHistory} from 'react-router-dom'
import PokemonCard from "../../../../components/PokemonCard";
import { useState, useEffect,useContext } from 'react';
import {FireBaseContext} from "../../../../context/FireBaseContext";
import {PokemonContext} from "../../../../context/PokemonContext";
import {useDispatch, useSelector} from "react-redux";
import {
    getPokemonsAsync,
    selectChosenPokemonsData,
    selectPokemonsData,
    selectPokemonsLoading,
    setChosenPokemons,
} from "../../../../store/pokemons";


const StartPage =()=>{
    const pokemonContext = useContext(PokemonContext);
    const history = useHistory();
    const dispatch =useDispatch();
    const pokemonsRedux = useSelector(selectPokemonsData);
    const chosenPokemonsRedux = useSelector(selectChosenPokemonsData);
    const isLoading = useSelector(selectPokemonsLoading);
    const [pokemons, setpokemons]= useState({});
    const [chosenPokemons, setChosenPokemon]= useState([]);

    const selectPokemon = (key)=>
    {
        const pokemon = {...pokemons[key]};
        setpokemons(prevState=>({
            ...prevState,
            [key]:{
                ...prevState[key],
                selected:!prevState[key].selected,
            }
        }));

        if(chosenPokemons[key])
        {
            const copyPokemons = {...chosenPokemons};
            delete copyPokemons[key];
            dispatch(setChosenPokemons(copyPokemons))
        }
        else{
            const copyPokemons = {...chosenPokemons,[key]:pokemon};
            dispatch(setChosenPokemons(copyPokemons));
        }
    };

    useEffect(()=>{
        dispatch(getPokemonsAsync())
    },[]);

    useEffect(()=>{
        setpokemons(pokemonsRedux)
    },[pokemonsRedux]);

    useEffect(()=>{
        setChosenPokemon(chosenPokemonsRedux)
    },[chosenPokemonsRedux]);

    const startGame =()=>{

        history.push('/game/board')
    };
    return(
        <>
            <div  style={{padding:'70px',zIndex:'1000', position: 'relative', display: 'inline-block'}} >
                <button  onClick={startGame} disabled={Object.entries(pokemonContext.pokemon).length<5}>
                    Start Game
                </button>
            </div>
            <div className={f.flex}>
                {
                    Object.entries(pokemons).map(([key,{name,img,id,type,values,active,selected}])=>
                        <PokemonCard key={key} className={f.card} isSelected={selected} onChangePockemon={()=>{ if (Object.entries(pokemonContext.pokemon).length<5 || selected) selectPokemon(key)}} isActive={true}  name={name} img={img} id={id} type ={ type} values={values}/>)
                }
            </div>
        </>
    )
};

export default StartPage