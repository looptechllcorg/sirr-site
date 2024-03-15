// import style scss
import { useContext, useState } from "react";
import style from "./ProductsPageFilter.module.scss";
import CloseIcon from "../../assets/icons/CloseIcon";
import ReactSlider from "react-slider";
import ArrowDown from "../../assets/icons/ArrowDown";
import { FavoriteItemsCategoryDatas } from "../../MyWriteDatas/myDatas";
// import useFormik
import { useFormik } from "formik";
import { GlobalContext } from "../../Contexts/GlobalContext";
import sirrSite from "../../Helpers/Sirr";
import urls from "../../ApiValues/urls";
import ArrowUp from "../../assets/icons/ArrowUp";

export default function ProductsPageFilter({ closeFunc, setAllProductDatas  }) {
    const [openCloseFilter, setOpenCloseFilter] = useState({
            CategoryFilter: true,
            sortFilter: true,
            priceFilter: true,
    });

    const { categoryNameDatas } = useContext(GlobalContext);

    const [value, setValue] = useState([]);
    const onClickOpenCloseFunc = (item) => {
        setOpenCloseFilter((prevState) => ({ ...prevState, [item]: !prevState[item] }));
    };

  

    const { handleChange, handleSubmit, values, resetForm } = useFormik({
        initialValues: {
            categories: [],
            sort: 'az'
        },
        onSubmit: async (values) => {
            // if(value) values = {...values, price: value}
             try {
                let searchParams = new URLSearchParams();
                if(values.categories) {
                    values.categories.forEach(c => {
                        searchParams.set('categories[]', c);
                    })
                }
                if(values.sort) searchParams.set('sort', values.sort);
                if(value.length) {
                    searchParams.set('price[0]', value[0]);
                    searchParams.set('price[1]', value[1]);
                }
            	let res = await sirrSite.api().get(`${urls.allProduct}?${searchParams.toString()}`);
                setAllProductDatas(res.data.data.data)

             } catch (error) {
            	console.log(error);
    
             }
            // resetForm()
        },
    });
    return (
        <form className={style.filterWrapper} onSubmit={handleSubmit}>
            <button className={style.closeBtn} onClick={closeFunc}>
                <CloseIcon />
            </button>
            <div className={style.CategoryFilter}>
                <div onClick={() => onClickOpenCloseFunc("CategoryFilter")} className={style.titleCategory}>
                    <h4>All Categories</h4>
                    <span>{openCloseFilter.CategoryFilter ? "-" : "+"}</span>
                </div>
                {openCloseFilter.CategoryFilter && (
                    <ul className={style.categoryName}>
                        {categoryNameDatas.map((categoryName) => (
                            <div className={style.checkBoxWrapper} key={categoryName.id}>
                                <input className={style.checkBoxInput} 
                                type="checkbox"
                                value={categoryName.slug}
                                name="categories"
                                onChange={handleChange}
                                id={categoryName.title}
                                 />
                                 <label className={style.categoryTitle} htmlFor={categoryName.title}>

                                 {categoryName.title} ({categoryName.products_count})
                                 </label>
                                <span >
                                    
                                </span>
                            </div>
                        ))}
                    </ul>
                )}
            </div>

            <div className={style.sortFilter}>
                <div onClick={() => onClickOpenCloseFunc("sortFilter")} className={style.titleFilter}>
                    <h4>Sort by</h4>
                    <span>{openCloseFilter.sortFilter ? "-" : "+"}</span>
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
                    <h4>Price</h4>
                    <span>{openCloseFilter.priceFilter ? "-" : "+"}</span>
                </div>
                {openCloseFilter.priceFilter && (
                    <>
                        <ReactSlider className="horizontal-slider" thumbClassName="example-thumb" trackClassName="example-track" defaultValue={[0, 150]} min={0} max={150} onChange={(value, index) => setValue(value)} renderThumb={(props, state) => <div {...props}></div>} />
                        <div className={style.filterResult}>
                            <span className={style.minValue}>{value[0]} AZN</span>
                            <span className={style.seperator}> - </span>
                            <span className={style.maxValue}>{value[1]} AZN</span>
                        </div>
                    </>
                )}
            </div>
            <button onClick={(e) => {handleSubmit(e); closeFunc();}}  className={style.filterResultBtn}>Submit</button> 
        </form>
    );
}
