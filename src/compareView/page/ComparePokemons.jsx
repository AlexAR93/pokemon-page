import React, { useEffect, useState } from 'react';
import {PokemonToCompare,StatsList} from '../components';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../store';


export const ComparePokemons = () => {
    const [pokemonToSearch, setPokemonToSearch] = useState('')
    const [pokemonToSearchTwo, setPokemonToSearchTwo] = useState('')

    const dispatch=useDispatch();

    const {pokemon,pokemonIsLoading}=useSelector(state=>state.pokemon)
    const {types,stats,image,weight,height,name}=pokemon;
    
    const [firstPokemonData, setFirstPokemonData] = useState({
        loading:false
      })
      const [secondPokemonData, setSecondPokemonData] = useState({
        loading:false
      })

      useEffect(() => {
        pokemonToSearch.length>1&&dispatch(getPokemon(pokemonToSearch));
      }, [pokemonToSearch])

      useEffect(() => {
        pokemonToSearchTwo.length>1&&dispatch(getPokemon(pokemonToSearchTwo));
      }, [pokemonToSearchTwo])
      
      useEffect(() => {
        if(pokemon.stats){
            pokemonToSearch!==firstPokemonData?.data?.name&&pokemonToSearch.length>1&&setFirstPokemonData((c)=>({
                ...c,
                data:{
                    image:image,
                    name:name,
                    height:height,
                    weight:weight,
                    ...Object.fromEntries(stats.map(data=>[`${data.stat.name}`,data.base_stat])),
                    types:types.map(data=>`${data.type.name}`)
                },
                loading:pokemonIsLoading        
            }))
            pokemonToSearchTwo!==secondPokemonData?.data?.name&&pokemonToSearchTwo.length>1&&setSecondPokemonData((c)=>(
                {
                    ...c,
                    data:{
                        image:image,
                        name:name,
                        height:height,
                        weight:weight,
                        ...Object.fromEntries(stats.map(data=>[`${data.stat.name}`,data.base_stat])),
                        types:types.map(data=>`${data.type.name}`)
                    },
                    loading:pokemonIsLoading        
                }
            ))
        }
    
      }, [pokemon])
      
  return (
        <main className='main-compare-view'>
             <h1>Compare stats of the Pokemon you want</h1>
            <div className="comparator-container">
                <PokemonToCompare setPokemonToSearch={setPokemonToSearch} pokemonToSearch={pokemonToSearch} setPokemonData={setFirstPokemonData} pokemonData={firstPokemonData} />
                <div className='stats-container'>
                    {
                        (firstPokemonData.data&&secondPokemonData.data)&&(
                            <StatsList firstPokemonData={firstPokemonData} secondPokemonData={secondPokemonData}/>
                        )
                    }
                </div>

                <PokemonToCompare setPokemonToSearch={setPokemonToSearchTwo} pokemonToSearch={pokemonToSearchTwo} setPokemonData={setSecondPokemonData} pokemonData={secondPokemonData}/>
            
            </div> 
        </main>


  )
}
