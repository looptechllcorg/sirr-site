import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import sirrSite from "../Helpers/Sirr";


export const SearchContext= createContext();

export const SearchProvider=({children})=>{

	const [searchInpValue, setSearchInpValue]=useState("")
    const [searchResult, setSearchResult] = useState([]);
	const [searchInputShow, setSearchInputShow]=useState(false);
    const [noIcon, setNoIcon]=useState(true)

	const navigate=useNavigate()
	// const [emptyResult, setEmptyResult] = useState(false);
	
	const handleSearch = async (s=null) => {
		try {
		  if(!s) return;
		  const response = await sirrSite.api().get(`/products?search=${s}`)
		  let result = response.data.data;
		  if(!result.length)
		//    setEmptyResult(true)
		  setSearchResult(result);
		} catch (error) {
		  console.error(error);     
		}  
	  };

	
	  const handleKeyDownHeaderInput=(e)=>{
        if(searchInpValue !== "" && e.key === "Enter"){
            handleSearch(e.target.value)
          navigate(`/search?searchInpValue=${searchInpValue}`)
             setSearchInputShow(false)
             setNoIcon(false)
			 ClearInputValue()
        }
        else{
            return false
        }
    }

	const onChangeInput=(e)=>{
		setSearchInpValue(e.target.value)  
   }

   const ClearInputValue=()=>{
	setSearchInpValue("")
}

	return(
		<SearchContext.Provider value={{
			searchInpValue,
			onChangeInput,
			handleSearch,
			handleKeyDownHeaderInput,
			searchInputShow,
			searchResult,
			setSearchInputShow,
			noIcon
			}}>
			{children}
		</SearchContext.Provider>
	)

}