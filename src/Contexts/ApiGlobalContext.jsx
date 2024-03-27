import { createContext, useEffect, useState } from "react";
import sirrSite from "../Helpers/Sirr";
import urls from "../ApiValues/urls";

export const ApiGlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const ApiGlobalProvider = ({ children }) => {
    const [branchesDatas, setBranchesDatas] = useState([]);
    const [categoryNameDatas, setCategoryNameDatas] = useState([]);
    const [socialDatas, setSocialDatas] = useState({});

    const getCategoryData = async () => {
        try {
            const ResCategory = await sirrSite.api().get(urls.categories);
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

    useEffect(() => {
        getBranchesDatas();
        getCategoryData();
        getSocialDatas();
    }, []);

    // console.log("branches data", branchesDatas);
    // console.log("categoryNameDatas", categoryNameDatas);
    // console.log("social datas", socialDatas);

    return <ApiGlobalContext.Provider value={{ branchesDatas, categoryNameDatas, socialDatas}}>{children}</ApiGlobalContext.Provider>;
};
