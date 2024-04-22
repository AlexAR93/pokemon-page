import React from 'react'
import {PokeCards} from '../components/PokeCards'
import {PokeSearch} from '../components/PokeSearch'
import './index.css';
export const PokemonCards = () => {
  return (
        <main className='main-search-pokemon'>
          <h1>Search you pokemon</h1>
          <PokeSearch/>
          <PokeCards/>
        </main>
  )
}
