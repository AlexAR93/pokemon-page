import { createSlice } from '@reduxjs/toolkit';

export const toShowPokemonSlice = createSlice({
    name: 'toShowPokemon',
    initialState: { 
        show:false,
        pokemonName:null
    },
    reducers: { 
        showPokemon:(state)=>{
            state.show=true;
        },
        hidePokemon:(state)=>{
            state.show=false;
            console.log(state.show)
        },
        setPokemonName:(state,{payload})=>{
            state.pokemonName=payload
        }
     },
});

export const {showPokemon, hidePokemon, setPokemonName} = toShowPokemonSlice.actions;
