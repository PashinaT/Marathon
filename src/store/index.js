import {configureStore} from "@reduxjs/toolkit";
import usersReducer from './users'
import pokemonsReducer from './pokemons'
import resultReducer from './result'

export default configureStore({
    reducer:{
        user: usersReducer,
        pokemons: pokemonsReducer,
        result: resultReducer
    }
})