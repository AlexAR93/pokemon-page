import { Box, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { useState } from 'react'
import { CardContext } from '../../context/CardContext'

const PokeSearch = () => {

  const {currentPokemon, setCurrentPokemon}= useContext(CardContext)

  const [input, setInput] = useState('')

  const handleInputChange=({target})=>{
    setInput(target.value)
    console.log(target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setCurrentPokemon({
      state:true,
      name:input.toLocaleLowerCase()
    })
  }
  
  return (
    <Box component='form' pb={3} onSubmit={handleSubmit}>
      <TextField 
        id="outlined-basic"
        label="Search Pokemon"
        variant="outlined"
        sx={{width:'100%'}}
        onChange={handleInputChange}
      />
    </Box>
  )
}

export default PokeSearch