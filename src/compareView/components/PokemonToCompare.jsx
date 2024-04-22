import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react';


export const PokemonToCompare = ({setPokemonToSearch,pokemonToSearch,setPokemonData,pokemonData}) => {
    const [input, setInput] = useState('')


    const handleInputChange=({target})=>{
      setInput(target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      setPokemonToSearch(input.toLowerCase().trim())
      setInput('')
    }

  return (
    <Box component='div'>
        <Box component='form' pb={3} onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic"
                label="Search Pokemon"
                variant="outlined"
                sx={{width:'100%'}}
                onChange={handleInputChange}
                value={input}
            />
            <Button 
            variant="contained"
            type='submit'
            sx={{marginTop:'20px'}}
            >
                Search
            </Button>
        </Box>
        {
          pokemonData?.data&&(
          <article>
              <img src={pokemonData?.data.image} alt={pokemonData?.data.name} />
              <h2>{pokemonData?.data.name}</h2>
          </article>
          )
        }
    </Box>
  )
}
