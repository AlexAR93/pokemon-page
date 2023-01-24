import { Box, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { CompareContext } from '../../context/CompareContext'
import useFetchPoke from '../../hooks/useFetchPoke'

const PokemonToCompare = ({setPokemonToSearch,pokemonToSearch}) => {

    const {setFirstPokemonData, setSecondPokemonData}= useContext(CompareContext)

    const [input, setInput] = useState('')
  
    const handleInputChange=({target})=>{
      setInput(target.value)
      console.log(target.value)
    }
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      setPokemonToSearch(input.toLowerCase())
    }

    const {types,stats,image,weight,height,names}=useFetchPoke(pokemonToSearch)

    useEffect(() => {
        setFirstPokemonData({
            height:height,
            weight:weight,
            stats:stats,
            types:types
        })
    }, [names])
    
    
  
  return (
    <Box component='div'>
        <Box component='form' pb={3} onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic"
                label="Search Pokemon"
                variant="outlined"
                sx={{width:'100%'}}
                onChange={handleInputChange}
            />
        </Box>
        {
            image&&names&&(
                <article>
                    <img src={image} alt={names} />
                    <h2>{names}</h2>
                </article>
            )
        }
    </Box>
  )
}

export default PokemonToCompare