import f from "./style.module.css";
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
        const newKey = database.ref().child('pokemons').push().key;
        const data = Object.entries(openedPokemons)[0][1];
        database.ref('pokemons/' + newKey).set(data);
        database.ref('pokemons').once('value', (snapshot)=>{
            setOpenPokemons(snapshot.val());
        });
    };

    useEffect(()=>{
        database.ref('pokemons').once('value', (snapshot)=>{
            setOpenPokemons(snapshot.val());
        });
    },[]);
return(
    <div  >
        <div style={{padding:'70px',zIndex:'1000', position: 'relative', display: 'inline-block'}} >
            <button  onClick={addPokemon}>
                Add Pokemon!
            </button>
        </div>
        <div className={f.flex}>
            {
                Object.entries(openedPokemons).map(([key,{name,img,id,type,values,active}])=>
                    <PokemonCard key={key} onChangePockemon={()=> updateOpenedPockemons(id)} isActive={active}  name={name} img={img} id={id} type ={ type} values={values}/>)
            }
        </div>
    </div>
)
};

export default GamePage