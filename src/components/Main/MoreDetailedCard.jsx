import React from 'react'

import './index.css'


export default function MoreDetailedCard({currentPokemon, setCurrentPokemon, useFetchPoke}){

    let {types,stats}=useFetchPoke(currentPokemon.name)
    
    const closeDetailsCard=()=>{
        setCurrentPokemon({
            state:false
          })
    }

  return (
    <div className='details-container'>
        <article className='card-container'>
            <div className="img-container">
                <img
                src={useFetchPoke(currentPokemon.name).image}
                alt={currentPokemon.name}
                />
            </div>

            <h1 className='tittle'>
            {currentPokemon.name}
            </h1>

            <div className='cardDetails'>

                <div className="cardDetails__principal">
                    <h2>Fuerza: <span>{useFetchPoke(currentPokemon.name).weight}</span></h2>
                    <h2>Altura: <span>{useFetchPoke(currentPokemon.name).height}</span></h2>
                </div>
    
                <div className="cardDetails__secondary">
                    <div className='type'>
                        <h2>Tipo:</h2>
                        <ul>
                        {
                                types!==undefined&&(
                                    types.map(element => <li key={element.type.name}>
                                        {element.type.name}
                                    </li>)
                                )
                        }
                        </ul>
                    </div>
                    <div className='stats'>
                        <h2>Stats:</h2>
                        <ul>
                        {
                            stats!==undefined&&(
                                stats.map(element => <li key={element.stat.name}>
                                    {element.stat.name}={element.base_stat}
                                </li>)
                            )
                        }
                        </ul>
                    </div>
                </div>
            </div>

        </article>
        <button onClick={closeDetailsCard}>
            <p>Cerrar</p>
        </button>
    </div>
  );
}