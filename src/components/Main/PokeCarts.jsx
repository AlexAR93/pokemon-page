import React, { useEffect, useState } from 'react'
import getPokemon from '../../helpers/getPokemon'
import useFetchPoke from '../../hooks/useFetchPoke'
import Card from './Card'

import Grid from '@mui/material/Grid';
import MoreDetailedCard from './MoreDetailedCard';

const PokeCarts = () => {

  const [currentPokemon, setCurrentPokemon] = useState({
    state:false
  })

  const [data, setData] = useState([])

  useEffect(() => {
    getPokemon()
    .then(d=>setData([...d]))
  }, [])
  
  useEffect(() => {
    console.log(currentPokemon)
  }, [currentPokemon])
  
  
  return (
    <>
      <Grid container spacing={2}>
        {
          data.length>0&&
          data.map(d=><Grid item xs={12} sm={4} md={2} key={d.name}><Card name={d.name} useFetchPoke={useFetchPoke} setCurrentPokemon={setCurrentPokemon}/></Grid>)
        }
      </Grid>

      {
        currentPokemon.state==true&&(
          <MoreDetailedCard
          currentPokemon={currentPokemon} setCurrentPokemon={setCurrentPokemon} useFetchPoke={useFetchPoke}/>
        )
      }
    </>
  )
}

export default PokeCarts