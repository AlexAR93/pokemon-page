import { Box } from '@mui/system'
import React, { useState } from 'react'
import CompareContextProvider from '../../context/CompareContext'
import PokemonToCompare from './PokemonToCompare'
import StatsList from './StatsList'

const ComparePokemons = () => {
    const [pokemonToSearch, setPokemonToSearch] = useState('')
    const [pokemonToSearch2, setPokemonToSearch2] = useState('')
    
  return (
    <CompareContextProvider>
        <Box component='div' p={1}>
            <h1>Compare stats of the Pokemon you want</h1>
            <Box component='div' className="comparator-container" sx={{display:'flex', justifyContent:'space-between', alignItems:'center', textAlign:'center'}}>
                <PokemonToCompare setPokemonToSearch={setPokemonToSearch} pokemonToSearch={pokemonToSearch}/>

                <StatsList/>
                <StatsList/>

                <PokemonToCompare setPokemonToSearch={setPokemonToSearch2} pokemonToSearch={pokemonToSearch2}/>
            </Box>
        </Box>
    </CompareContextProvider>

  )
}

export default ComparePokemons