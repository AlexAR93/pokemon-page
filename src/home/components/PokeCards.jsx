import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons} from './../../store';
//! import getPokemon from '../../helpers/getPokemon'
//! import useFetchPoke from '../../hooks/useFetchPoke'
import {Card} from './Card'

import Grid from '@mui/material/Grid';
import {MoreDetailedCard} from './MoreDetailedCard';
import { Box, Button } from '@mui/material';
import { Loading } from '../../ui';

export const PokeCards = () => {


  const {data,isLoading,page,next,previous}=useSelector(state=>state.pokemons);
  const {show}=useSelector(state=>state.toShowPokemon);

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  const onNextPage=()=>{
    dispatch(getPokemons(page))
  }
  const onBackPage=()=>{
    dispatch(getPokemons(page-2))
  }

  return (
    <>
      <Box display='flex' justifyContent='center' pb='27px' gap='10px'>
          <Button
            variant="contained"
            onClick={onBackPage}
            disabled={!previous}
          >
            {'Volver atras'}
          </Button>
          <Button
            variant="contained"
            onClick={onNextPage}
            disabled={!next}
            >
              {`Ver página ${page+1}`}
          </Button>
        </Box>
      <Grid container spacing={2}>
        {
          data.length>0&&isLoading==false?(
          data.map(d=><Grid item xs={12} sm={4} md={2} key={d.name}><Card data={d}/></Grid>)
          ):(
            <Box display='flex' justifyContent='center' alignItems='center' width='100%'>
              <Loading/>
            </Box>
          )
        }
      </Grid>
        <Box display='flex' justifyContent='center' pt='27px' gap='10px'>
          <Button
            variant="contained"
            onClick={onBackPage}
            disabled={!previous}
          >
            {'Volver atras'}
          </Button>
          <Button
            variant="contained"
            onClick={onNextPage}
            disabled={!next}
            >
              {`Ver página ${page+1}`}
          </Button>
        </Box>
      {
        show&&(
          <MoreDetailedCard/>
        )
      }
    </>
  )
}
