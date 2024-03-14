import { createContext, useEffect, useState } from "react";
import sirrSite from "../Helpers/Sirr";
import urls from "../ApiValues/urls";

export const GlobalContext=createContext();


export const GlobalProvider=({children})=>{
	const [showHiddenVideo, setShowHiddenVideo]=useState(true)
	const [categoryNameDatas, setCategoryNameDatas]=useState([]);


	useEffect(()=>{
      const getCategoryData= async ()=>{
		    try {
				const ResCategory= await sirrSite.api().get(urls.categories)
				      setCategoryNameDatas(ResCategory.data.data)
			} catch (error) {
				console.log(error);
			}
	  }
	  getCategoryData()
	},[])
       
	console.log("cat", categoryNameDatas);

	const onClickShowHiddenVideo=()=>{
		setShowHiddenVideo(!showHiddenVideo)  
	            }


	 

	return(
		<GlobalContext.Provider value={{showHiddenVideo, onClickShowHiddenVideo, categoryNameDatas}}>
			{children}
		</GlobalContext.Provider>
	)

}