import s from "./style.module.css"
import cardBack from "../../assets/card-back-side.jpg"
import { useState } from 'react';
import cn from 'classnames';

const PokemonCard =({name,img,id,type,values,isActive,onChangePockemon,minimize ,className})=>{
const handleClick = ()=>{
    onChangePockemon();
};
    return(
        <div className={cn(className, s.pokemonCard, {[s.active]: isActive})}>
            <div className={s.cardFront}>
                <div className={cn(s.wrap, s.front)}>
                    <div className={cn(s.pokemon, s[type])}>
                        <div className={s.values}>
                            <div className={cn(s.count, s.top)}>{values!==undefined?values.top:null}</div>
                            <div className={cn(s.count, s.right)}>{values!==undefined?values.right:null}</div>
                            <div className={cn(s.count, s.bottom)}>{values!==undefined?values.bottom:null}</div>
                            <div className={cn(s.count, s.left)}>{values!==undefined?values.left:null}</div>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={img} alt={name} />
                        </div>
                        { !minimize && (<div className={s.info}>
                            <span className={s.number}>#{id}</span>
                            <h3 className={s.name}>
                                {name}
                            </h3>
                            <small className={s.type}>
                                Type: <span>{type}</span>
                            </small>
                        </div>) }
                    </div>
                </div>
            </div>

            <div className={s.cardBack}>
                <div className={cn(s.wrap, s.back)} />
            </div>

        </div>

    )
};

export default PokemonCard