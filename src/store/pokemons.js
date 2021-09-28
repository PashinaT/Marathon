import {createSlice} from '@reduxjs/toolkit'
import FireBaseClass from "../service/firebase";

export const slice = createSlice({
    name:'pokemons',
    initialState:{
        isLoading: false,
        data:{},
        error: null,
        chosenPokemons:{}
    },
    reducers: {
        fetchLoading: (state,action)=>({...state,isLoading:true}),
        fetchPokemonsResolve: (state,action)=>({...state,isLoading:false,data:action.payload}),
        fetchPokemonsReject: (state,action)=>({...state,isLoading:false,data:{}, error:action.payload}),
        setChosenPokemons: (state,action)=>({...state,
            chosenPokemons: action.payload}),
           }
});


export const {fetchLoading,fetchPokemonsResolve,fetchPokemonsReject,setChosenPokemons} = slice.actions;

export const selectPokemonsLoading = state => state.pokemons.isLoading;
export const selectPokemonsData = state => state.pokemons.data;
export const selectChosenPokemonsData = state => state.pokemons.chosenPokemons;

export const getPokemonsAsync =()=>  async(dispatch)=>{
    dispatch(fetchLoading());
    const data= await FireBaseClass.getPokrmonsOnce();
    dispatch(fetchPokemonsResolve(data))

}

export const addPokemonAsync =(pokemon)=>  async(dispatch)=>{

    await FireBaseClass.addPokemon(pokemon);
    dispatch(getPokemonsAsync());

};


export default slice.reducer;