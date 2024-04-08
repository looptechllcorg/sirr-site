// import style scss
import sirrSite from "../../Helpers/Sirr";
import TitleList from "../TitleList/TitleList";
import style from "./TextAndImgSideBySide.module.scss";
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";  

export default function TextAndImgSideBySide({ branchesInfoDatas, branchesImagesDatas, bgColor }) {
    return (
        <div className={style.TextAndImg}>
            <div style={{ backgroundColor: bgColor }} className={style.TextWrapper}>
                <TitleList textPosition={"start"} detailedTitle={branchesInfoDatas.title} />
                <p className={style.descrioption} dangerouslySetInnerHTML={{ __html: branchesInfoDatas.body }}></p>
            </div>
            <div className={style.sliderWrapper}>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    // autoplay={{
                    //     delay: 1500,
                    // }}
                    loop={true}
                    modules={[Autoplay]}
                    className={style.branchesImageSlider}
                >
                    {branchesImagesDatas.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={`${sirrSite.baseUrlImage}${image}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
