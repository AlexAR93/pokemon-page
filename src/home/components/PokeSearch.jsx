import { Box, Button, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemon, showPokemon } from '../../store';
export const PokeSearch = () => {

  const dispatch=useDispatch()

  const [input, setInput] = useState('')

  const handleInputChange=({target})=>{
    setInput(target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(getPokemon(input.toLocaleLowerCase()))
    dispatch(showPokemon())
  }

  
  return (
    <Box component='form' pb={3} onSubmit={handleSubmit} sx={{display:'flex', flexDirection:'column'}}>
      <TextField 
        id="outlined-basic"
        label="Search Pokemon"
        variant="outlined"
        sx={{width:'100%'}}
        onChange={handleInputChange}
      />
      <Box component='div' sx={{marginTop:'20px',alignSelf:'center'}}>
        <Button 
          variant="contained"
          type='submit'
          >
              Search
        </Button>
      </Box>
    </Box>
  )
}
