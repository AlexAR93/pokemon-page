import React, { useState } from 'react'
import PokemonToCompare from './PokemonToCompare'
import StatsList from './StatsList'

const ComparePokemons = () => {
    const [pokemonToSearch, setPokemonToSearch] = useState('')
    const [pokemonToSearch2, setPokemonToSearch2] = useState('')
    
    const [firstPokemonData, setFirstPokemonData] = useState({
        loading:true
      })
      const [secondPokemonData, setSecondPokemonData] = useState({
        loading:true
      })
      
  return (
        <div className='main-compare-view'>
            <h1>Compare stats of the Pokemon you want</h1>
            <div className="comparator-container">
                <PokemonToCompare setPokemonToSearch={setPokemonToSearch} pokemonToSearch={pokemonToSearch} setFirstPokemonData={setFirstPokemonData} />

                <div className='stats-container'>
                    {
                        (firstPokemonData.loading==false&&secondPokemonData.loading==false)&&(
                            <StatsList firstPokemonData={firstPokemonData} secondPokemonData={secondPokemonData}/>
                        )
                    }
                </div>

                <PokemonToCompare setPokemonToSearch={setPokemonToSearch2} pokemonToSearch={pokemonToSearch2} setFirstPokemonData={setSecondPokemonData}/>
            </div>
        </div>


  )
}

export default ComparePokemons