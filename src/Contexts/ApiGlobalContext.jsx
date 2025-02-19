import { createContext, useContext, useEffect, useState } from "react";
import sirrSite from "../Helpers/Sirr";
import urls from "../ApiValues/urls";
import { LanguageContext } from "./LanguageContext";

export const ApiGlobalContext = createContext();   

// eslint-disable-next-line react/prop-types
export const ApiGlobalProvider = ({ children }) => {
    const {siteLang} = useContext(LanguageContext);
    const [branchesDatas, setBranchesDatas] = useState([]);
    const [categoryNameDatas, setCategoryNameDatas] = useState([]);
    const [socialDatas, setSocialDatas] = useState({});
    const [searchResultHeaderBgImg, setSearchResultHeaderBgImg] = useState({});
    const [productsAndProductsDetailHeaderBgImg, setProductsAndProductsDetailHeaderBgImg] = useState({});

    const loadImages = async (prDetailHeader) => { 
        const data = [prDetailHeader];
		const imagePromises = [];
        data.forEach(key => {
            let imageSrc = key.image;
            let imageUrl = (`${sirrSite.baseUrlImage}${imageSrc}`)  
			const image = new Image();
			const promise = new Promise((resolve, reject) => {
				image.onload = () => resolve(imageUrl);
				image.onerror = () => reject(imageUrl);
			});
			image.src = imageUrl;
			imagePromises.push(promise);
		});
	
		await Promise.all(imagePromises)
			.then(() => {
				console.log('loaded');
			})
			.catch((err) => {
				console.log('Error -- ', err);
			});
    };

    const getCategoryData = async () => {
        try {
            const ResCategory = await sirrSite.api().get(`${urls.categoriesName(siteLang)}`, { params: { product_count: 1 } });
            setCategoryNameDatas(ResCategory.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getBranchesDatas = async () => {
        try {
            const res = await sirrSite.api().get(urls.branches(siteLang));
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
            await loadImages(res.data.data);
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
    }, [siteLang]);

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
