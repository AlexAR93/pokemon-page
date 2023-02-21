import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import useFetchPoke from '../../hooks/useFetchPoke'

import Swal from 'sweetalert2'
 
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

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
                data:{
                    height:height,
                    weight:weight,
                    ...Object.fromEntries(stats.map(data=>[`${data.stat.name}`,data.base_stat])),
                    types:types.map(data=>`${data.type.name}`)
                },
                loading:loading
            }),
            Toast.fire({
                icon: 'success',
                title: 'Pokémon found!'
                })
        )

        loading=='error'&&(
            Toast.fire({
                icon: 'error',
                title: 'Pokémon not found!'
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
            <Button 
            variant="contained"
            type='submit'
            sx={{marginTop:'20px'}}
            >
                Search
            </Button>
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