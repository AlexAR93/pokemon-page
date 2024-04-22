import { configureStore } from '@reduxjs/toolkit'
import { pokemonsSlice, individualPokemonSlice, toShowPokemonSlice } from "./slices";

export const store=configureStore({
    reducer:{
        pokemons:pokemonsSlice.reducer,
        pokemon:individualPokemonSlice.reducer,
        toShowPokemon:toShowPokemonSlice.reducer,
    }
})