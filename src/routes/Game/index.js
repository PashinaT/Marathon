import s from "./style.module.css"
import d from "../../data.json"
import f from "../Home/style.module.css";
import PokemonCard from "../../components/PokemonCard";
import database from "../../service/firebase";
import { useState, useEffect } from 'react';


const GamePage =()=>{
    const [openedPokemons, setOpenPokemons]= useState({});
    const updateOpenedPockemons = (id)=>
    {
        setOpenPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = true;
                    database.ref('pokemons/'+ item[0]).update({
                        active:true
                    });
                };
                acc[item[0]] = pokemon;
                return acc;
            }, {});
        });
    };

    const addPokemon = ()=>{
        const newPokemon = database.ref().child('pokemons').push().key;
    };

    useEffect(()=>{
        database.ref('pokemons').once('value', (snapshot)=>{
            setOpenPokemons(snapshot.val());
        });
    },[]);
return(

            <div className={f.flex}>
                {
                    Object.entries(openedPokemons).map(([key,{name,img,id,type,values,active}])=>
                        <PokemonCard key={key} onChangePockemon={()=> updateOpenedPockemons(id)} isActive={active}  name={name} img={img} id={id} type ={ type} values={values}/>)
                }
            </div>
)
};

export default GamePage