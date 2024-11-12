// import style scss
import style from "./SearchResult.module.scss";
import MainBgImage from "../../Components/MainBgImage/MainBgImage";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import SiteWay from "../../Components/SiteWay/SiteWay";
import ProductPagePrCart from "../../Components/ProductPagePrCart/ProductPagePrCart";
import SearchIcon from "../../assets/icons/SearchIcon";
import SearchResultPageIcon from "../../assets/icons/SearchResultPageIcon";
import { ApiGlobalContext } from "../../Contexts/ApiGlobalContext";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import Loading from "../../Components/Loading/Loading";

export default function SearchResult() {
    const { searchInpValue, onChangeInput, searchResult, handleKeyDownHeaderInputSearchresult, handleSearch, emptyResult, currentPageSearch, pageCount, handlePageChange, ClearInputValue } = useContext(SearchContext);
    const { searchResultHeaderBgImg } = useContext(ApiGlobalContext);

    const {t} = useTranslation()

    const onClickResult = () => {    
        if (searchInpValue !== "") {
            ClearInputValue();
            handleSearch(searchInpValue);
        }
    };

    useEffect(() => {
        if (searchInpValue) {
            handleSearch(searchInpValue);
        }
        
    }, []);


    if(!searchResult.data) return <Loading />

    return (
        <section id={style.SearchResultWrapper}>
            <div style={{ paddingTop: 0 }} className="container">
                <MainBgImage bgImg={searchResultHeaderBgImg.image} bgImgOnText={searchResultHeaderBgImg.title} bgImgHeight={"400px"} />
                <SiteWay data={["Home Page", "Search"]} />
                <div className={style.resultSearch}>
                    <input className={style.resultSearchInput} value={searchInpValue} onChange={onChangeInput} onKeyDown={handleKeyDownHeaderInputSearchresult} placeholder={t("search")} id="resultSearch" />
                    <label className={style.label} onClick={() => onClickResult()} htmlFor="resultSearch">
                        <SearchIcon stroke="rgb(127, 57, 44)" className={style.searchIcon} />
                        {t("search")}
                    </label>
                </div>
                {searchResult.data?.length ? (
                    <div>
                        <div className={style.searchResultWrapper}>
                            {searchResult.data?.map((product) => (
                                <ProductPagePrCart key={product.id} data={product} />
                            ))}
                        </div>
                        <ReactPaginate
                            initialPage={Number(currentPageSearch) - 1}
                            disableInitialCallback={true}
                            pageCount={pageCount}
                            pageRangeDisplayed={2}
                            marginPagesDisplayed={2}
                            onPageChange={handlePageChange}
                            containerClassName={"pagination"}
                            previousLinkClassName={"page"}
                            breakClassName={"page"}
                            nextLinkClassName={"page"}
                            pageClassName={"page"}
                            disabledClassName={"disabled"}
                            activeClassName={"active"}
                            breakLabel="..."
                            nextLabel=">"
                            previousLabel="<"
                        />
                    </div>
                ) : emptyResult ? (
                    <div className={style.noResultFound}>
                        <SearchResultPageIcon />
                            <h4 className={style.searchValue}>{t("empty-result") }</h4>
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
