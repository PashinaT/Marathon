import {createSlice} from '@reduxjs/toolkit'
import FireBaseClass from "../service/firebase";
import {selectUserLocalId} from "./users";

export const slice = createSlice({
    name:'pokemons',
    initialState:{
        isLoading: false,
        data:{},
        error: null,
        chosenPokemons:{},
        compPokemons:{}
    },
    reducers: {
        fetchLoading: (state,action)=>({...state,isLoading:true}),
        fetchPokemonsResolve: (state,action)=>({...state,isLoading:false,data:action.payload}),
        fetchPokemonsReject: (state,action)=>({...state,isLoading:false,data:{}, error:action.payload}),
        setChosenPokemons: (state,action)=>({...state,
            chosenPokemons: action.payload}),
        setCompPokemons: (state,action)=>({...state,
            compPokemons: action.payload}),
           }
});


export const {fetchLoading,fetchPokemonsResolve,fetchPokemonsReject,setChosenPokemons,setCompPokemons} = slice.actions;

export const selectPokemonsLoading = state => state.pokemons.isLoading;
export const selectPokemonsData = state => state.pokemons.data;
export const selectChosenPokemonsData = state => state.pokemons.chosenPokemons;
export const selectCompPokemonsData = state => state.pokemons.compPokemons;

export const getPokemonsAsync =()=>  async(dispatch, getState)=>{
    const localId = selectUserLocalId(getState());
    dispatch(fetchLoading());
    const data= await fetch(`https://pokemon-game-6e0fb-default-rtdb.firebaseio.com/${localId}/pokemons.json`)
        .then(res=>res.json());
    console.log("data", data);
    dispatch(fetchPokemonsResolve(data))

}

export const addPokemonAsync =(pokemon)=>  async(dispatch)=>{

    await FireBaseClass.addPokemon(pokemon);
    dispatch(getPokemonsAsync());

};


export default slice.reducer;