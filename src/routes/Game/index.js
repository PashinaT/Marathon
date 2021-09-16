import s from "./style.module.css"
import d from "../../data.json"
import f from "../Home/style.module.css";
import PokemonCard from "../../components/PokemonCard";

import { useState } from 'react';


const GamePage =()=>{
    const pokemons=d;
    const [openedPokemons, setOpenPokemons]= useState(pokemons);
    const updateOpenedPockemons = (id)=>
    {
        setOpenPokemons(pokemons.map(poc => {
            if (poc.id===id)
                poc.active=!poc.active;
            return poc;
        })

    )
    };
return(
        <div className={s.wrapper}>
            <p>Future game page</p>
            <div className={f.flex}>
                {
                    openedPokemons.map(item=><PokemonCard key={item.id} onChangePockemon={()=> updateOpenedPockemons(item.id)} isActive={item.active}  name={item.name} img={item.img} id={item.id} type ={ item.type} values={item.values}/>)
                }
            </div>
        </div>
)
};

export default GamePage