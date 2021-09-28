import f from "./style.module.css";
import {useHistory} from 'react-router-dom'
import PokemonCard from "../../../../components/PokemonCard";
import { useState, useEffect,useContext } from 'react';
import {FireBaseContext} from "../../../../context/FireBaseContext";
import {PokemonContext} from "../../../../context/PokemonContext";
import {useDispatch, useSelector} from "react-redux";
import {getPokemonsAsync, selectPokemonsData, selectPokemonsLoading} from "../../../../store/pokemons";


const StartPage =()=>{
    const firebase = useContext(FireBaseContext);
    const pokemonContext = useContext(PokemonContext);
    const history = useHistory();
    const dispatch =useDispatch();
    const pokemonsRedux = useSelector(selectPokemonsData);
    const isLoading = useSelector(selectPokemonsLoading);
    const [pokemons, setpokemons]= useState({});
    console.log('jjjjj');
    console.log(pokemonsRedux)
    const selectPokemon = (key)=>
    {
        const pokemon = {...pokemons[key]};
        pokemonContext.onSelectedPokemons(key, pokemon);
        setpokemons(prevState=>({
            ...prevState,
            [key]:{
                ...prevState[key],
                selected:!prevState[key].selected,
            }

        }))
    };

    const addPokemon = ()=>{
        const data = Object.entries(pokemons)[0][1];
        firebase.addPokemon(data);
    };

    useEffect(()=>{
        dispatch(getPokemonsAsync())
    },[]);

    useEffect(()=>{
        setpokemons(pokemonsRedux)
    },[pokemonsRedux]);

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