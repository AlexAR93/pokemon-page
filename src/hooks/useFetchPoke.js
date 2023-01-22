import { useState, useEffect } from 'react'
import { getSelectedPokemon } from '../helpers/getPokemon';

const useFetchPoke = (pokemon) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getSelectedPokemon( pokemon )
            .then(data=>{
                setState({
                    abilities: data.abilities,
                    names:data.name,
                    id:data.id,
                    image:data.sprites?.front_default,
                    weight:data.weight,
                    stats:data.stats,
                    types:data?.types,
                    height:data.height,
                    loading: false
                });
            })
            .catch(err=>alert('No existe este pokemon'))

    }, [pokemon])




    return state; // { data:[], loading: true };


}

export default useFetchPoke