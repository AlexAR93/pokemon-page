import React from 'react'
import CardContextProvider from '../../context/CardContext'
import PokeCarts from './PokeCarts'
import PokeSearch from './PokeSearch'

const PokemonCarts = () => {
  return (
    <CardContextProvider>
        <PokeSearch/>
        <PokeCarts/>
    </CardContextProvider>
  )
}

export default PokemonCarts