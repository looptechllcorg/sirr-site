// import style scss
import style from "./SearchResult.module.scss";
import MainBgImage from "../../Components/MainBgImage/MainBgImage";
import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import SiteWay from "../../Components/SiteWay/SiteWay";
import ProductPagePrCart from "../../Components/ProductPagePrCart/ProductPagePrCart";
import SearchIcon from "../../assets/icons/SearchIcon";
import SearchResultPageIcon from "../../assets/icons/SearchResultPageIcon";
import { ApiGlobalContext } from "../../Contexts/ApiGlobalContext";

export default function SearchResult() {
    const { searchInpValue, onChangeInput, searchResult, handleKeyDownHeaderInput, handleSearch, ClearInputValue, emptyResult } = useContext(SearchContext);
    const { searchResultHeaderBgImg } = useContext(ApiGlobalContext);

    const onClickResult = () => {
        if (searchInpValue !== "") {
            ClearInputValue();
            handleSearch(searchInpValue);
        }
    };

    const tt = searchInpValue;
    console.log(searchInpValue);

    return (
        <section id={style.SearchResultWrapper}>
            <div style={{ paddingTop: 0 }} className="container">
                <MainBgImage bgImg={searchResultHeaderBgImg.image} bgImgOnText={searchResultHeaderBgImg.title} bgImgHeight={"400px"} />
                <SiteWay data={["Home Page", "Search"]} />
                <div className={style.resultSearch}>
                    <input className={style.resultSearchInput} value={searchInpValue} onChange={onChangeInput} onKeyDown={handleKeyDownHeaderInput} placeholder="Search" id="resultSearch" />
                    <label className={style.label} onClick={() => onClickResult()} htmlFor="resultSearch">
                        <SearchIcon stroke="rgb(127, 57, 44)" className={style.searchIcon} />
                        Search
                    </label>
                </div>
                {searchResult.data?.length ? (
                    <div className={style.searchResultWrapper}>
                        {searchResult.data?.map((product) => (
                            <ProductPagePrCart key={product.id} data={product} />
                        ))}
                    </div>
                ) : emptyResult ? (
                    <div className={style.noResultFound}>
                        <SearchResultPageIcon />
                        <h4 className={style.searchValue}>{tt} tapilmadi</h4>
                    </div>
                ) : searchInpValue.length !== "" ? (
                    ""
                ) : (
                    <div style={{ textAlign: "center" }} className={style.loading}>
                        loading ...
                    </div>
                )}
            </div>
        </section>
    );
}
