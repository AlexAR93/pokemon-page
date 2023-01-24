import React, { useContext } from 'react'
import { CompareContext } from '../../context/CompareContext'
import useFetchPoke from '../../hooks/useFetchPoke'


const StatsList = () => {
    const {firstPokemonData, secondPokemonData}= useContext(CompareContext)
    console.log(firstPokemonData)
  return (
    <div>
        <div className="height">
            <p>{firstPokemonData.height}</p>
            <h3> :height: </h3>
            <p>{secondPokemonData.height}</p>
        </div>
    </div>
  )
}

export default StatsList