import React from 'react'
export const StatsList = ({firstPokemonData,secondPokemonData}) => {
  return (
    <>
        {
            Object.keys(firstPokemonData.data).filter(data=>data!=='image'&&data!=='name').map(data=>
              <div className='stats-container__line' key={data}>
                <div className={`first-data first-data-${firstPokemonData.data[data]}`}><p>
                  {typeof firstPokemonData.data[data]=='object'?firstPokemonData.data[data].map(data=><span key={data}>{data}</span>):firstPokemonData.data[data]}
                </p></div>
                <div className={`name-data`}><p>{data}</p></div>
                <div className={`second-data second-data-${secondPokemonData.data[data]}`}><p>
                  {typeof secondPokemonData.data[data]=='object'?secondPokemonData.data[data].map(data=><span key={data}>{data}</span>):secondPokemonData.data[data]}
                </p></div>
              </div>
            )
        }
    </>
  )
}