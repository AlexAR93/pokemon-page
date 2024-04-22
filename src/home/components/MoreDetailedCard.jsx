import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hidePokemon } from '../../store'
import { Loading } from '../../ui'
 
export function MoreDetailedCard(){
    const {pokemon,pokemonIsLoading}=useSelector(state=>state.pokemon);

    let {name,types,stats,image,weight,height}=pokemon;
    const dispatch=useDispatch();
    const closeDetailsCard=()=>{
        dispatch(hidePokemon())
    }

  return (
    pokemonIsLoading==false?(
        <div className='details-container'>
        <article className='card-container'>
            <div className="img-container">
                <img
                src={image}
                alt={name}
                />
            </div>

            <h1 className='tittle'>
            {name}
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
                <Loading/>
            </article>
            <button onClick={closeDetailsCard}>
                <p>Close</p>
            </button>
        </div>
    )
  );
}