import { createContext, useEffect, useState } from "react";
import sirrSite from "../Helpers/Sirr";
import urls from "../ApiValues/urls";

export const ApiGlobalContext = createContext();   

// eslint-disable-next-line react/prop-types
export const ApiGlobalProvider = ({ children }) => {
    const [branchesDatas, setBranchesDatas] = useState([]);
    const [categoryNameDatas, setCategoryNameDatas] = useState([]);
    const [socialDatas, setSocialDatas] = useState({});
    const [searchResultHeaderBgImg, setSearchResultHeaderBgImg] = useState({});
    const [productsAndProductsDetailHeaderBgImg, setProductsAndProductsDetailHeaderBgImg] = useState({});

    const getCategoryData = async () => {
        try {
            const ResCategory = await sirrSite.api().get(`${urls.categoriesName}`, { params: { product_count: 1 } });
            setCategoryNameDatas(ResCategory.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getBranchesDatas = async () => {
        try {
            const res = await sirrSite.api().get(urls.branches);
            setBranchesDatas(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getSocialDatas = async () => {
        try {
            const res = await sirrSite.api().get(urls.social);
            setSocialDatas(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getProductsAndProductsDetailHeaderBgImg = async () => {
        try {
            const res = await sirrSite.api().get(urls.productsAndProductsDetailHeaderBgImgUrl);
            setProductsAndProductsDetailHeaderBgImg(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getSearchResultHeaderBgImg = async () => {
        try {
            const res = await sirrSite.api().get(urls.searchResultHeaderBgImgUrl);
            setSearchResultHeaderBgImg(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBranchesDatas();
        getCategoryData();
        getSocialDatas();
        getSearchResultHeaderBgImg();
        getProductsAndProductsDetailHeaderBgImg();
    }, []);

    // console.log("branches data", branchesDatas);
    // console.log("categoryNameDatas", categoryNameDatas);
    // console.log("social datas", socialDatas);
    // console.log("search bg Img", searchAndSearchResultHeaderBgImg);
    // console.log("product bg img", productsAndProductsDetailHeaderBgImg);

    return (
        <ApiGlobalContext.Provider
            value={{
                branchesDatas,
                categoryNameDatas,
                socialDatas,
                productsAndProductsDetailHeaderBgImg,
                searchResultHeaderBgImg,
            }}
        >
            {children}
        </ApiGlobalContext.Provider>
    );
};
