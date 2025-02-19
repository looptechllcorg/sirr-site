import { Swiper, SwiperSlide } from "swiper/react";
import { PropTypes } from "prop-types";
import { Pagination } from "swiper/modules";
import "./FavoritCategories.css";
import { useContext, useRef } from "react";
import sirrSite from "../../Helpers/Sirr";
import urls from "../../ApiValues/urls";
import { ApiGlobalContext } from "../../Contexts/ApiGlobalContext";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../Contexts/LanguageContext";

export default function FavoriteCategories({ setFavoriteItemsDatas }) {
    const { categoryNameDatas } = useContext(ApiGlobalContext);  
    const {t} = useTranslation();
    const {siteLang} = useContext(LanguageContext);
    
    const handleSlideChange = async (e) => {
        e.slideTo(e.clickedIndex);
        let searchParams = new URLSearchParams();
        let activeSlug = e.clickedSlide.dataset.slug;
        categoryNameDatas.forEach(i => {
            i.active = i.slug == activeSlug;
        });
        categoryNameDatas.isFirstActive = !activeSlug;
        if (activeSlug) searchParams.set("categories[]", activeSlug);
        // searchParams.set("lang", langfromcontext);
        try {
            let res = await sirrSite.api().get(`${urls.allProduct(siteLang)}${searchParams.toString() ? `&${searchParams.toString()}` : ""}`);
            setFavoriteItemsDatas(res.data.data.data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="index-favorite-categories">
            <Swiper
                className="index-favorite-categories-slider"
                spaceBetween={"16px"}
                slidesPerView={"auto"}
                slidesPerGroup={1}
                slidesPerGroupAuto={true}
                setWrapperSize={true}
                modules={[Pagination]}
                onClick={handleSlideChange}
                preventInteractionOnTransition={true}
                slidesOffsetBefore={24}
                pagination={{
                    clickable: true,
                    el: ".index-favorite-categories-slider-pagination",
                    renderBullet: function (index, className) {
                        return `<div class="${className}"></div>`;
                    },
                }}
            >
                <SwiperSlide className={`index-favorite-categories-item`} key="all" data-active={categoryNameDatas.isFirstActive || categoryNameDatas.isFirstActive === undefined} >{t("all")}</SwiperSlide>
                {categoryNameDatas.map((category) => (
                    <SwiperSlide className={`index-favorite-categories-item`} data-slug={category.slug} data-active={category.active} key={category.id}>
                        {category.title}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

FavoriteCategories.propTypes = {
    categories: PropTypes.array,
};
