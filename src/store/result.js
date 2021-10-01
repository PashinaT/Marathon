import {createSlice} from '@reduxjs/toolkit'
import FireBaseClass from "../service/firebase";

export const slice = createSlice({
    name:'result',
    initialState:{
    result:null
    },
    reducers: {
        setResult: (state,action)=>({...state,
            result: action.payload}),
           }
});


export const {setResult} = slice.actions;

export const selectResult = state => state.result.result;


export default slice.reducer;