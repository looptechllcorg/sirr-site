import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import sirrSite from "../Helpers/Sirr";

export const SearchContext = createContext();

// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
    const [searchInpValue, setSearchInpValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [searchInputShow, setSearchInputShow] = useState(false);
    const [emptyResult, setEmptyResult] = useState(false);
    const [noIcon, setNoIcon] = useState(true);
    // const [load, setLoad] = useState(true);

    const navigate = useNavigate();

    const handleSearch = async (s = null) => {
        try {
            if (!s) return;
            const response = await sirrSite.api().get(`/products?search=${s}`);
            let result = response.data.data;
            if (!result.length)
                // setLoad(false);
                setEmptyResult(true);
                setSearchResult(result);
        } catch (error) {
            console.error(error);
        }
    };

    const handleKeyDownHeaderInput = (e) => {
        if (searchInpValue !== "" && e.key === "Enter") {
            handleSearch(e.target.value);
            navigate(`/search?searchInpValue=${searchInpValue}`);
            // setLoad(false);
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
                // load,
                // setLoad,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
