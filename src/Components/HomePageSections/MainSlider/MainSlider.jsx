

// import style scss
import style from "./MainSlider.module.scss"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation,Autoplay, Pagination} from 'swiper/modules';
// import react icons
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
// import my write datas
import { MainSliderDatas } from "../../../MyWriteDatas/myDatas";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
   

export default function MainSlider() {  
  return (
	<section id={style.mainSlider}>
		<div style={{padding:0}} className="container">
		<Swiper
		        spaceBetween={30}
				effect={'fade'}
		loop={true}
		pagination={{
			clickable: true,
				 }}
				 autoplay={{
					delay: 2000,
					disableOnInteraction: false,  
						  }}
		navigation={{ 
			prevEl: '.mainSlider-swiper-button-prev',
			nextEl: '.mainSlider-swiper-button-next'
			}}
		modules={[EffectFade,Navigation,Autoplay,Pagination]}
		className="mainSliderWrapper">

			{MainSliderDatas.map(item=>(
				<SwiperSlide key={item.id}>
                  <img src={item.image} alt="" /> 
				  <div className={style.overlay}></div>    
				  <div className={style.sliderPrInfo}>
					  <h3 className={style.SliderPrTitle}>{item.title}</h3>
					  <p className={style.sliderPrDescription}>{item.description}</p>
					<Link><Button textColor={"white"} borderStyle={"1px solid white"} text={"More than"}/></Link>  
				</div> 
			
				</SwiperSlide>
			))}
            	    <div className="mainSlider-swiper-button-prev"><FaArrowRight /></div>
					<div className="mainSlider-swiper-button-next"><FaArrowLeft /></div>
      </Swiper>
		</div>
	  
	</section>
  )
}
