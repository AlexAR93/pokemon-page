import { Box, Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { useState } from 'react'
import { CardContext } from '../../context/CardContext'

const PokeSearch = () => {

  const {setCurrentPokemon}= useContext(CardContext)

  const [input, setInput] = useState('')

  const handleInputChange=({target})=>{
    setInput(target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setCurrentPokemon({
      state:true,
      name:input.toLocaleLowerCase()
    })
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

export default PokeSearch