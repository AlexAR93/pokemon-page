import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import useFetchPoke from '../../hooks/useFetchPoke'

const PokemonToCompare = ({setPokemonToSearch,pokemonToSearch,setFirstPokemonData}) => {

    const [input, setInput] = useState('')
  
    const handleInputChange=({target})=>{
      setInput(target.value)
    }
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      setPokemonToSearch(input.toLowerCase())
    }

    const {types,stats,image,weight,height,names,loading}=useFetchPoke(pokemonToSearch)

    useEffect(() => {
        loading==false&&(
            setFirstPokemonData({
                height:height,
                weight:weight,
                stats:stats,
                types:types,
                loading:loading
            })
        )
    }, [useFetchPoke(pokemonToSearch)])
  
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