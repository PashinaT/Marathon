import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './counter'
import pokemonsReducer from './pokemons'
import resultReducer from './result'

export default configureStore({
    reducer:{
        counter: counterReducer,
        pokemons: pokemonsReducer,
        result: resultReducer
    }
})