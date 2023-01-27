import React from 'react'
import CardContextProvider from '../../context/CardContext'
import PokeCards from './PokeCards'
import PokeSearch from './PokeSearch'

const PokemonCards = () => {
  return (
    <CardContextProvider>
        <main className='main-search-pokemon'>
          <h1>Search you pokemon</h1>
          <PokeSearch/>
          <PokeCards/>
        </main>
    </CardContextProvider>
  )
}

export default PokemonCards