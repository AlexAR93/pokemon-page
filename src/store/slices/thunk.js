import { pokemonApi } from "../../helpers";
import { setPokemon, startLoadingPokemon } from "./individualPokemonSlice";
import { setPokemons, startLoadingPokemons } from "./pokemonsSlice";

 // ! sweet alert config
 const sweetAlert=(message,type='warning',text='')=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    
      Toast.fire({
        icon: type,
        title: `${message}`,
        // text:text,
      })
  }


export const getPokemons=(page = 0)=>async(dispatch,getState)=>{
    dispatch(startLoadingPokemons())

     //TODO: realizar petición http
     const {data}=await pokemonApi.get(`/pokemon?limit=10&offset=${ page*10 }`);        console.log(data.previous)
    const newData=await Promise.all(data.results.map(async({url})=>{
        const {data}=await pokemonApi.get(url);

        return {
            abilities: data.abilities,
            name:data.name,
            id:data.id,
            image:data.sprites?.front_default,
            weight:data.weight,
            stats:data.stats,
            types:data?.types,
            height:data.height,
        }
    }))

     dispatch( setPokemons({
             data:newData,
             page: page +1,
             next:data.next,
             previous:data.previous
         })
     )
}

export const getPokemon=(id)=>async(dispatch,getState)=>{
  try {
    dispatch(startLoadingPokemon())

    //TODO: realizar petición http
    const {data}=await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // dispatch(setPokemons());
   const pokemon={
           abilities: data.abilities,
           name:data.name,
           id:data.id,
           image:data.sprites?.front_default,
           weight:data.weight,
           stats:data.stats,
           types:data?.types,
           height:data.height,
       }
    sweetAlert('Pokémon found!','success')
    dispatch( setPokemon({
            pokemon:pokemon
        })
    )
  } catch (error) {
    sweetAlert('Pokémon not found!','error')
  }
}