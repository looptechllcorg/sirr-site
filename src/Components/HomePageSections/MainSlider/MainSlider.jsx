// import style scss
import style from "./MainSlider.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "../../../assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../assets/icons/ArrowRightIcon";
import { useEffect, useState } from "react";
import sirrSite from "../../../Helpers/Sirr";
import urls from "../../../ApiValues/urls";

export default function MainSlider() {
    const [mainSlidersDatas, setMainSlidersDatas] = useState([]);

    const getMainSliderDatas = async () => {
        try {
            const res = await sirrSite.api().get(urls.mainSlider);
            setMainSlidersDatas(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMainSliderDatas();
    }, []);

//    console.log("mainSliderData", mainSlidersDatas);

    return (
        <section id={style.mainSlider}>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                // loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                }}
                navigation={{
                    prevEl: ".mainSlider-swiper-button-prev",
                    nextEl: ".mainSlider-swiper-button-next",
                }}
                modules={[EffectFade, Navigation, Autoplay, Pagination]}
                className="mainSliderWrapper"
            >
                {mainSlidersDatas?.map(item => (
                    <SwiperSlide key={item.id}>
                        <img src={`${sirrSite.baseUrlImage}${item.image}`} alt={item.title} />
                        <div className={style.overlay}></div>
                        <div style={{ padding: 0 }} className="container">
                        <div className={style.sliderPrInfo}>
                            <h3 className={style.SliderPrTitle}>{item.title}</h3>
                            <p className={style.sliderPrDescription}>{item.description}</p>
                            <Link
                                to="/about-us"
                                onClick={() => {
                                    console.log(1);
                                }}
                            >
                                <Button textColor={"white"} borderStyle={"1px solid white"} text={"More than"} />
                            </Link>
                        </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="mainSlider-swiper-button-prev">
                    <ArrowRightIcon />
                </div>
                <div className="mainSlider-swiper-button-next">
                    <ArrowLeftIcon />
                </div>
            </Swiper>
        </section>
    );
}
