import  i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import LocalLang from "./LocaleLanguages/LocaleLanguages.json"
import sirrSite from "./Helpers/Sirr";


export const defaultNS = 'translation';
export const resources ={
	az: {
		translation:LocalLang.az
	    },
	en: {
		translation:LocalLang.en
	    },
	ru: {
          translation:LocalLang.ru
	    }		
}

i18n.use(initReactI18next).init({       
    compatibilityJSON: 'v3',    
    lng: sirrSite.lng,
    fallbackLng: sirrSite.lng,
    resources: resources,
    defaultNS,
});

  export default i18n