import { createContext, useEffect, useState } from "react";
import sirrSite from "../Helpers/Sirr";
import i18n from "../i18n"

export const LanguageContext=createContext();


export const LanguageProvider=({children})=>{
      const [siteLang, setSiteLang]=useState(sirrSite.lng)

	  useEffect(()=>{
        const  defaultLang=localStorage.getItem("lang") || sirrSite.lng;
		       sirrSite.lng=defaultLang;
			   i18n.changeLanguage(defaultLang)
			   setSiteLang(defaultLang)
	  },[])

	const onChangeLang=(e)=>{
	      const	l=e.target.value;
                i18n.changeLanguage(l)
				localStorage.setItem("lang", l)
				setSiteLang(l)
	}


	const onClickLang = (selectedLang) => {
		i18n.changeLanguage(selectedLang);
		localStorage.setItem("lang", selectedLang);
		setSiteLang(selectedLang);
	  };
	     


	return(
        <LanguageContext.Provider value={{siteLang, onChangeLang,onClickLang}}>
			{children}
		</LanguageContext.Provider>
	)
}