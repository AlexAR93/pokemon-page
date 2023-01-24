import { createContext, useState } from "react";
export const CompareContext = createContext()
const CompareContextProvider=(props)=>{
    const [firstPokemonData, setFirstPokemonData] = useState({
        state:false
      })
      const [secondPokemonData, setSecondPokemonData] = useState({
        state:false
      })
 
    return(
        <CompareContext.Provider value={{firstPokemonData,setFirstPokemonData,secondPokemonData,setSecondPokemonData}}>
            {props.children}
        </CompareContext.Provider>
    )
}
export default CompareContextProvider