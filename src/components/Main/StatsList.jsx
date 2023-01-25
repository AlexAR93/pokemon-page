import React from 'react'

const StatsList = ({pokemonData}) => {

  return (
    <div className='stats-container'>
        <div className="type">
            <ul>
                {pokemonData.types.map(element => <li key={element.type.name}>
                {element.type.name}
                </li>)}
            </ul>
        </div>

        <div className="height">
            <p>{pokemonData.height}</p>
        </div>
        <div className="weight">
            <p>{pokemonData.weight}</p>
        </div>
        <div className="hp">
            <p>{pokemonData.stats[0].base_stat}</p>
        </div>
        <div className="attack">
            <p>{pokemonData.stats[1].base_stat}</p>
        </div>
        <div className="defense">
            <p>{pokemonData.stats[2].base_stat}</p>
        </div>
        <div className="special-attack">
            <p>{pokemonData.stats[3].base_stat}</p>
        </div>
        <div className="special-defense">
            <p>{pokemonData.stats[4].base_stat}</p>
        </div>
        <div className="speed">
            <p>{pokemonData.stats[5].base_stat}</p>
        </div>
    </div>
  )
}

export default StatsList