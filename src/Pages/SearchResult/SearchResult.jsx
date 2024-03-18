// import style scss
import style from "./SearchResult.module.scss";
import MainBgImage from "../../Components/MainBgImage/MainBgImage";
// import image
import searchBgImg from "../../assets/images/searchBgImg.jpg";
import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import SiteWay from "../../Components/SiteWay/SiteWay";
import ProductPagePrCart from "../../Components/ProductPagePrCart/ProductPagePrCart";
import SearchIcon from "../../assets/icons/SearchIcon";
import SearchResultPageIcon from "../../assets/icons/SearchResultPageIcon";
// import { useSearchParams } from "react-router-dom";

export default function SearchResult() {
    const { searchInpValue, onChangeInput, searchResult, handleKeyDownHeaderInput, handleSearch, ClearInputValue, emptyResult } = useContext(SearchContext);

    const onClickResult = () => {
        if (searchInpValue !== "") {
            ClearInputValue();
            handleSearch(searchInpValue);
        }
    };

    return (
        <section id={style.SearchResultWrapper}>
            <div style={{ paddingTop: 0 }} className="container">
                <MainBgImage bgImg={searchBgImg} bgImgOnText={"Search"} bgImgHeight={"400px"} />
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
                        <h4 className={style.searchValue}>bu meshul tapilmadi</h4>
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
