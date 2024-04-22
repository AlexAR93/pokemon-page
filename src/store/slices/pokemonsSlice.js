import { createSlice } from '@reduxjs/toolkit';

const initialState={
    page:0,
    data:[],
    isLoading: false,
    next:null,
    previous:null,
    hasError:null,
}

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: initialState ,
    reducers: { 
        startLoadingPokemons: (state)=>{
            state.isLoading=true;
        },
        setPokemons:(state,{payload})=>{
            state.isLoading=false;
            state.data=payload.data;
            state.page=payload.page;
            state.next=payload.next;
            state.previous=payload.previous;
        }
     },
});

export const {startLoadingPokemons,setPokemons} = pokemonsSlice.actions;