// import style scss
import style from "./Product.module.scss";

import MainBgImage from "../../Components/MainBgImage/MainBgImage";
import SocialList from "../../Components/SocialList/SocialList";
import ProductPagePrCart from "../../Components/ProductPagePrCart/ProductPagePrCart";
import SiteWay from "../../Components/SiteWay/SiteWay";
import ProductsPageFilter from "../../Components/ProductsPageFilter/ProductsPageFilter";
import { useContext, useEffect, useState } from "react";
import FilterIcon from "../../assets/icons/FilterIcon";
import sirrSite from "../../Helpers/Sirr";
import urls from "../../ApiValues/urls";
import ReactPaginate from "react-paginate";
import { ApiGlobalContext } from "../../Contexts/ApiGlobalContext";
import { useSearchParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

export default function Product() {
    const [showHiddenFilterComponent, setShowHiddenFilterComponent] = useState(false);
    const [AllProductDatas, setAllProductDatas] = useState([]);
    const { productsAndProductsDetailHeaderBgImg } = useContext(ApiGlobalContext);
    const [productLoading, setProductLoading] = useState(true);
    const [pageCount, setPageCount] = useState(2);
    let [searchParams, setSearchParams] = useSearchParams();
    const initialPage = searchParams.get("page") || 1;
    const [currentPage, setcurrentPage] = useState(initialPage);

    const handlePageChange = (selectedObject) => {
		const pageNumber = Number(selectedObject.selected) + 1;
        searchParams.set("page", pageNumber);
		setSearchParams(searchParams);
        setcurrentPage(pageNumber);
    };

    useEffect(() => {
        let currentPage = searchParams.get("page") || 1;
        setcurrentPage(currentPage);
        const getProductPageDatas = async () => {
            try {
                const ResPrPageDatas = await sirrSite.api().get(`${urls.allProduct}`, { params: { page: currentPage, categories: searchParams.getAll("categories[]"), sort: searchParams.get("sort"), "price[0]": searchParams.get("price[0]"), "price[1]": searchParams.get("price[1]") } });
                setAllProductDatas(ResPrPageDatas.data.data.data);
                setPageCount(ResPrPageDatas.data.data.last_page);
                setProductLoading(false);
            } catch (error) {
                console.log(error);
                setProductLoading(false);
            }
        };
        getProductPageDatas();
        window.scrollTo({ top: 300, behavior: "smooth" });
    }, [searchParams]);

    const onClickshowHiddenFilterComponent = () => {
        setShowHiddenFilterComponent(!showHiddenFilterComponent);
    };


    // console.log("al ", AllProductDatas);
    return (
        <>
        {
                productLoading ? <Loading /> :
                     <section id={style.Product}>
            <SocialList />
            <div style={{ paddingTop: 0 }} className="container">
                <MainBgImage bgImg={productsAndProductsDetailHeaderBgImg.image} bgImgOnText={productsAndProductsDetailHeaderBgImg.title} />
                <SiteWay data={["Home Page", "Products"]} />

                <div className={style.FilterAndProduct}>
                    <div className={style.mobileFilter}>
                        {showHiddenFilterComponent && <ProductsPageFilter setAllProductDatas={setAllProductDatas} closeFunc={onClickshowHiddenFilterComponent} />}
                        <button onClick={onClickshowHiddenFilterComponent} className={style.filterShow}>
                            Filter <FilterIcon />
                        </button>
                    </div>

                    <div className={style.webFilter}>
                        <ProductsPageFilter setAllProductDatas={setAllProductDatas} />
                    </div>

                    <div className={style.ProductWrapper}>
                        {AllProductDatas.map((product) => (
                            <ProductPagePrCart key={product.id} data={product} />
                        ))}
                    </div>
                </div>

                <ReactPaginate
                    initialPage={Number(currentPage) - 1}
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
        </section>
        }
        </>
       
    );
}
