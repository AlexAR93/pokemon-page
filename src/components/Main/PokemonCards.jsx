import React from 'react'
import CardContextProvider from '../../context/CardContext'
import PokeCards from './PokeCards'
import PokeSearch from './PokeSearch'

const PokemonCards = () => {
  return (
    <CardContextProvider>
        <PokeSearch/>
        <PokeCards/>
    </CardContextProvider>
  )
}

export default PokemonCards