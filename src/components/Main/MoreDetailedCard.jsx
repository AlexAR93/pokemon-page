import React from 'react'
import './index.css'

export default function MoreDetailedCard({currentPokemon, setCurrentPokemon, useFetchPoke}){

    let {types,stats,image,weight,height,loading}=useFetchPoke(currentPokemon.name)
    
    const closeDetailsCard=()=>{
        setCurrentPokemon({
            state:false
          })
    }
  return (
    loading==false?(
        <div className='details-container'>
        <article className='card-container'>
            <div className="img-container">
                <img
                src={image}
                alt={currentPokemon.name}
                />
            </div>

            <h1 className='tittle'>
            {currentPokemon.name}
            </h1>

            <div className='cardDetails'>

                <div className="cardDetails__principal">
                    <h2>Weight: <span>{weight}</span></h2>
                    <h2>Height: <span>{height}</span></h2>
                </div>
    
                <div className="cardDetails__secondary">
                    <div className='type'>
                        <h2>Type:</h2>
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
                                    {element.stat.name}=<span>{element.base_stat}</span>
                                </li>)
                            )
                        }
                        </ul>
                    </div>
                </div>
            </div>

        </article>
        <button onClick={closeDetailsCard}>
            <p>Close</p>
        </button>
    </div>
    ):(
        <div className='details-container'>
            <article className='card-container'>
                <h1>Charging...</h1>
            </article>
            <button onClick={closeDetailsCard}>
                <p>Close</p>
            </button>
        </div>
    )
  );
}