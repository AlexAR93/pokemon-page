import { createSlice } from '@reduxjs/toolkit';

const initialState={
    pokemon:{},
    pokemonIsLoading: false,
    hasError:null
}

export const individualPokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState ,
    reducers: { 
        startLoadingPokemon: (state)=>{
            state.pokemonIsLoading=true;
        },
        setPokemon:(state,{payload})=>{
            state.pokemonIsLoading=false;
            state.pokemon=payload.pokemon;
        }
     },
});

export const {startLoadingPokemon,setPokemon} = individualPokemonSlice.actions;