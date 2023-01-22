const getPokemon = async() => {
    const resp=await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=18`);
    const data=await resp.json();
    return data.results
}

const getSelectedPokemon=async(name)=>{
    const resp=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const data=await resp.json();

    return data
}

export default getPokemon
export {
    getSelectedPokemon
}