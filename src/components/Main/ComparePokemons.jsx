import { Box } from '@mui/system'
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

        <Box component='div' p={1}>
            <h1>Compare stats of the Pokemon you want</h1>
            <Box component='div' className="comparator-container" sx={{display:'flex', justifyContent:'space-between', alignItems:'center', textAlign:'center'}}>
                <PokemonToCompare setPokemonToSearch={setPokemonToSearch} pokemonToSearch={pokemonToSearch} setFirstPokemonData={setFirstPokemonData} />

                {
                    firstPokemonData.loading==false&&(
                        <StatsList pokemonData={firstPokemonData}/>
                    )
                }
                {
                    secondPokemonData.loading==false&&(
                        <StatsList pokemonData={secondPokemonData}/>
                    )
                }
                

                <PokemonToCompare setPokemonToSearch={setPokemonToSearch2} pokemonToSearch={pokemonToSearch2} setFirstPokemonData={setSecondPokemonData}/>
            </Box>
        </Box>


  )
}

export default ComparePokemons