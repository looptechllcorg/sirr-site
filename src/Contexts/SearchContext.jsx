import { createContext, useState } from "react";


export const SearchContext= createContext();

export const SearchProvider=({children})=>{

	const [searchInpValue, setSearchInpValue]=useState("")

 
	const onChangeInput=(e)=>{
		setSearchInpValue(e.target.value)
   }

   const ClearInputValue=()=>{
	setSearchInpValue("")
}

	return(
		<SearchContext.Provider value={{
			searchInpValue,
			onChangeInput
			}}>
			{children}
		</SearchContext.Provider>
	)

}