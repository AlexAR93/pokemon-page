import React from 'react'
import { Footer, Header } from '../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PokemonCards } from '../home'
import { AboutThisApp } from '../aboutView'
import { ComparePokemons } from '../compareView'


export const AppRouter = () => {
  return (
    <div className='layout'>
        {/* HEADER */}
        <Header/>
        
        <Routes>
            <Route path='/pokemons' element={<PokemonCards/>} />
            <Route path='/compare' element={<ComparePokemons/>} />
            <Route path='/about' element={<AboutThisApp/>} />
            <Route path='/' element={<Navigate to='pokemons' replace='false'/>} />
        </Routes>

        {/* FOOTER */}
        <Footer/>
    </div>
  )
}
