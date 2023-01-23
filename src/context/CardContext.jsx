import { createContext, useState } from "react";
export const CardContext = createContext()
const CardContextProvider=(props)=>{
    const [currentPokemon, setCurrentPokemon] = useState({
        state:false
      })
 
    return(
        <CardContext.Provider value={{currentPokemon,setCurrentPokemon}}>
            {props.children}
        </CardContext.Provider>
    )
}
export default CardContextProvider