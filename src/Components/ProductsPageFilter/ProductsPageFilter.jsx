// import style scss
import style from "./ProductsPageFilter.module.scss";

import { useContext, useState } from "react";
import CloseIcon from "../../assets/icons/CloseIcon";
import ReactSlider from "react-slider";
import ArrowDown from "../../assets/icons/ArrowDown";
// import useFormik
import { useFormik } from "formik";
// import sirrSite from "../../Helpers/Sirr";
// import urls from "../../ApiValues/urls";
import ArrowUp from "../../assets/icons/ArrowUp";
import Subtraction from "../../assets/icons/Subtraction";
import AdditionIcon from "../../assets/icons/AdditionIcon";
import { ApiGlobalContext } from "../../Contexts/ApiGlobalContext";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
export default function ProductsPageFilter({ closeFunc, setAllProductDatas }) {
    
     const {t} = useTranslation() 
    const { categoryNameDatas } = useContext(ApiGlobalContext);
    const [openCloseFilter, setOpenCloseFilter] = useState({
        CategoryFilter: true,
        sortFilter: true,
        priceFilter: true,
    });

    const [value, setValue] = useState([]);
    const onClickOpenCloseFunc = (item) => {
        setOpenCloseFilter((prevState) => ({ ...prevState, [item]: !prevState[item] }));
	};
	
	const [searchParams, setSearchParams] = useSearchParams();


    const { handleChange, handleSubmit } = useFormik({
        initialValues: {
            categories: [],
            sort: "az",
        },
        onSubmit: async (values) => {
            try {
                let searchParams = new URLSearchParams();
                if (values.categories) {
                    values.categories.forEach((c) => {
                        searchParams.append("categories[]", c);  
                    });
                }
                if (values.sort) searchParams.set("sort", values.sort);
                if (value.length) {
                    searchParams.set("price[0]", value[0]);
                    searchParams.set("price[1]", value[1]);
                }
                // let res = await sirrSite.api().get(`${urls.allProduct}?${searchParams.toString()}`);
				// console.log("salam");
                // setAllProductDatas(res.data.data.data);
				setSearchParams(searchParams.toString());
				// console.log(searchParams.toString());
            } catch (error) {
                console.log(error);
            }
        },
    });
    return (
        <form className={style.filterWrapper} onSubmit={handleSubmit}>
            <button className={style.closeBtn} onClick={closeFunc}>
                <CloseIcon  color="black"/>
            </button>
            <div className={style.CategoryFilter}>
                <div onClick={() => onClickOpenCloseFunc("CategoryFilter")} className={style.titleCategory}>
                    <h4 className={style.FilterCategoryName}>{t("all-categories")}</h4>
                    <span>{openCloseFilter.CategoryFilter ? <Subtraction className={style.OpenCloseIcon} /> : <AdditionIcon  className={style.OpenCloseIcon} />}</span>
                </div>
                {openCloseFilter.CategoryFilter && (
                    <ul className={style.categoryName}>
                        {categoryNameDatas.map((categoryName) => (
                            <div className={style.checkBoxWrapper} key={categoryName.id}>
                                <input className={style.checkBoxInput} type="checkbox" value={categoryName.slug} name="categories" onChange={handleChange} id={categoryName.title} />
                                <label className={style.categoryTitle} htmlFor={categoryName.title}>
                                    {categoryName.title} ({categoryName.products_count})
                                </label>
                                <span></span>
                            </div>
                        ))}   
                    </ul>
                )}
            </div>

            <div className={style.sortFilter}>
                <div onClick={() => onClickOpenCloseFunc("sortFilter")} className={style.titleFilter}>
                    <h4 className={style.FilterCategoryName}>{t("sort-by")}</h4>
                    <span>{openCloseFilter.sortFilter ? <Subtraction className={style.OpenCloseIcon} /> : <AdditionIcon className={style.OpenCloseIcon} />}</span>
                </div>

                {openCloseFilter.sortFilter && (
                    <div className={style.sortWrapper}>
                        <input type="radio" onChange={handleChange} name="sort" id="az" value="az" hidden />
                        <label htmlFor="az" className={style.sortAZ}>
                            <span className={style.icon}>
                                <ArrowUp />
                            </span>
                            <div className={style.az}>
                                <span>A</span>
                                <span>Z</span>
                            </div>
                        </label>
                        <input type="radio" onChange={handleChange} name="sort" id="za" value="za" hidden />
                        <label htmlFor="za" className={style.sortZA}>
                            <span className={style.icon}>
                                <ArrowDown />
                            </span>
                            <div className={style.za}>
                                <span>Z</span>
                                <span>A</span>
                            </div>
                        </label>
                    </div>
                )}
            </div>
            <div className={style.priceFilter}>
                <div onClick={() => onClickOpenCloseFunc("priceFilter")} className={style.titlePrice}>
                    <h4 className={style.FilterCategoryName}>{t("price")}</h4>
                    <span>{openCloseFilter.priceFilter ? <Subtraction className={style.OpenCloseIcon} /> : <AdditionIcon className={style.OpenCloseIcon} />}</span>
                </div>
                {openCloseFilter.priceFilter && (
                    <>
                        <ReactSlider className="horizontal-slider" thumbClassName="example-thumb" trackClassName="example-track" defaultValue={[0, 100]} min={0} max={100} onChange={(value, index) => setValue(value)} renderThumb={(props, state) => <div {...props}></div>} />
                        <div className={style.filterResult}>
                            <span className={style.minValue}>{value[0]} AZN</span>
                            <span className={style.seperator}> - </span>
                            <span className={style.maxValue}>{value[1]} AZN</span>
                        </div>
                    </>
                )}
            </div>
            <button
                onClick={(e) => {
                    handleSubmit(e);
                    closeFunc();
                }}
                className={style.filterResultBtn}
            >
                {t("search")}
            </button>
        </form>
    );
}
