import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import sirrSite from "../Helpers/Sirr";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext();

// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {    
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const initialSearchInpValue = searchParams.get("search") || "";
    const [searchInpValue, setSearchInpValue] = useState(initialSearchInpValue);
    const [searchResult, setSearchResult] = useState([]);
    const [searchInputShow, setSearchInputShow] = useState(false);
    const [emptyResult, setEmptyResult] = useState(false);
    const [noIcon, setNoIcon] = useState(true);
    const [showHiddenMenu, setShowHiddenMenu] = useState(false);
    // const [load, setLoad] = useState(true);

    const [pageCount, setPageCount] = useState(2);
    const initialPage = 1;
    const [currentPageSearch, setcurrentPageSearch] = useState(initialPage);

    const FuncShowHidenMenu = () => {
        setShowHiddenMenu(!showHiddenMenu);
        // ClearInputValue();
    };

    const handlePageChange = (selectedObject) => {
        const pageNumber = Number(selectedObject.selected) + 1;
        setcurrentPageSearch(pageNumber);
        handleSearch(searchInpValue, pageNumber);
        window.scrollTo({ top: 300, behavior: "smooth" });
    };

    const handleSearch = async (s = null, page = null) => {   
        try {
            if (!page) page = currentPageSearch;
            if (!s) return;
            const response = await sirrSite.api().get(`/products?search=${s}`, { params: { page: page } });
            let result = response.data.data;
            setPageCount(response.data.data.last_page);
            if (!result.length) setEmptyResult(true);
            setSearchResult(result);
        } catch (error) {
            console.error(error);
        }
    };

    const handleKeyDownHeaderInput = (e) => {
        if (searchInpValue !== "" && e.key === "Enter") {
            handleSearch(e.target.value);
            navigate(`/search?search=${searchInpValue}`);
            setSearchInputShow(false);
            setNoIcon(false);
            ClearInputValue();
            FuncShowHidenMenu();
        } else {
            return false;
        }
    };
         

       const handleKeyDownHeaderInputSearchresult = (e) => {
           if (searchInpValue !== "" && e.key === "Enter") {
               handleSearch(e.target.value);
               navigate(`/search?search=${searchInpValue}`);
               setSearchInputShow(false);
               setNoIcon(false);
               ClearInputValue();
              
           } else {
               return false;
           }
       };

     
    const onChangeInput = (e) => {
        setSearchInpValue(e.target.value);
        // setLoad(false);
    };

    const ClearInputValue = () => {
        setSearchInpValue("");
    };

    return (
        <SearchContext.Provider
            value={{
                searchInpValue,
                setSearchInpValue,
                onChangeInput,
                ClearInputValue,
                handleSearch,
                handleKeyDownHeaderInput,
                searchInputShow,
                setSearchInputShow,
                searchResult,
                noIcon,
                setNoIcon,
                emptyResult,
                setEmptyResult,
                currentPageSearch,
                pageCount,
                handlePageChange,
                showHiddenMenu,
                FuncShowHidenMenu,
                handleKeyDownHeaderInputSearchresult,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
