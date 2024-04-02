// import style scss
import style from "./SocialMedia.module.scss";
// import my write datas
import { SocialMediaSliderDatas } from "../../../MyWriteDatas/myDatas";
import TitleList from "../../TitleList/TitleList";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";



export default function SocialMedia() {
    return (
        <section id={style.SocialMedia}>
            <div style={{ paddingBottom: 0 }} className="container">
                <TitleList mainTitle={"Social media"} detailedTitle={"Instagram"} textPosition={"center"} />
                <div className={style.SocialMediaSliderWrapper}>
                    <Swiper
                        slidesPerView={1.5}
                        spaceBetween={10}
                        loop={true}
                        // navigation={{
                        // 	prevEl: '.socialMedia-swiper-button-prev',
                        // 	nextEl: '.socialMedia-swiper-button-next'
                        // 	}}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 2.5,
                            },
                            768: {
                                slidesPerView: 3.7,
                            },
                            1024: {
                                slidesPerView: 4.7,
                            },
                            1250: {
                                slidesPerView: 5.7,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="SocialMediaSlider"
                    >
                        {SocialMediaSliderDatas.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt="burada socialdan gelen sekiller var" />
                            </SwiperSlide>
                        ))}
                        {/* <div className="socialMedia-swiper-button-prev"><FaArrowRight /></div> */}
                        {/* <div className="socialMedia-swiper-button-next"><FaArrowLeft /></div> */}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
