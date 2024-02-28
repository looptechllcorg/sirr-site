import { createContext, useState } from "react";


export const SearchContext= createContext();

export const SearchProvider=({children})=>{

	const [searchInpValue, setSearchInpValue]=useState("")

 
    

   
	return(
		<SearchContext.Provider value={{
			searchInpValue,
			setSearchInpValue,
			}}>
			{children}
		</SearchContext.Provider>
	)

}