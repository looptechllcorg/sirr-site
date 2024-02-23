import { createContext, useState } from "react";

export const GlobalContext=createContext();


export const GlobalProvider=({children})=>{
	const [showHiddenVideo, setShowHiddenVideo]=useState(true)

	const onClickShowHiddenVideo=()=>{
		setShowHiddenVideo(!showHiddenVideo)  
	}
	return(
		<GlobalContext.Provider value={{showHiddenVideo, onClickShowHiddenVideo}}>
			{children}
		</GlobalContext.Provider>
	)

}