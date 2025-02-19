// import style scss
import style from "./DesertsSlider.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Button from "../../Button/Button";
import sirrSite from "../../../Helpers/Sirr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DesertsSlider({ desertSliderDatas }) {
    const {t} = useTranslation()
  
    return (
        <section id={style.DesertsSlider}>
            <div style={{ paddingTop: "20px" }} className="container">
                {desertSliderDatas?.map((item) => (
                    <div key={item.id} className={style.DesertsSliderWrapper}>
                        <div className={style.DesertsSliderLeft}>
                            <Swiper
                                spaceBetween={30}
                                effect={"fade"}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[EffectFade, Autoplay, Pagination]}
                                className="SliderLeft"
                            >
                                {item["gallery_1"]?.map((desert, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={`${sirrSite.baseUrlImage}${desert}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className={style.DesertsSliderCenter}>
                            <h2 className={style.desertTitle}>{item.title}</h2>
                            <p className={style.desertDescription}>{item.description}</p>
                            <Link to={`products?categories[]=${item["category"].slug}`}>
                                <Button text={t("more-than")} />
                            </Link>
                        </div>
                        <div className={style.DesertsSliderRight}>
                            <Swiper
                                spaceBetween={30}
                                effect={"fade"}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[EffectFade, Autoplay, Pagination]}
                                className="SliderRight"
                            >
                                {item["gallery_2"]?.map((desert, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={`${sirrSite.baseUrlImage}${desert}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
