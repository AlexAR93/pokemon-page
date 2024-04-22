import axios from 'axios';

export const pokemonApi= axios.create({
    baseURL:'https://pokeapi.co/api/v2'
})




//!Viejo
// const getSelectedPokemon=async(name)=>{
//     const resp=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

//     const data=await resp.json();

//     return data
// }

// export default getPokemon
// export {
//     getSelectedPokemon
// }