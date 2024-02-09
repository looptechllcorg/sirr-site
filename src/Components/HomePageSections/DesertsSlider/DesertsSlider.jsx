// import style scss
import style from "./DesertsSlider.module.scss"
// import my write datas
import { DesertsSliderLeftDatas } from "../../../MyWriteDatas/myDatas"
import { DesertsSliderCenterDatas } from "../../../MyWriteDatas/myDatas"
import { DesertsSliderRightDatas } from "../../../MyWriteDatas/myDatas"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import Button from "../../Button/Button";

export default function DesertsSlider() {
  return (
      <section id={style.DesertsSlider}>
		<div style={{paddingTop:"20px"}} className="container">
			<div className={style.DesertsSliderWrapper}>
				<div className={style.DesertsSliderLeft}>
				<Swiper
					spaceBetween={30}
					effect={'fade'}
					loop={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,  
					          }}
					pagination={{
						clickable: true,
					         }}
					modules={[EffectFade,Autoplay,Pagination]}
					className="SliderLeft"
      >
		{
			DesertsSliderLeftDatas.map(desert=>(
				<SwiperSlide key={desert.id}>
				<img src={desert.image}  />
			  </SwiperSlide>
			))
		}
      
                 </Swiper>
				</div>
				<div className={style.DesertsSliderCenter}>
                  <h2 className={style.desertTitle}>{DesertsSliderCenterDatas.title}</h2>
				  <p className={style.desertDescription}>{DesertsSliderCenterDatas.description}</p>
				   <Button text={"More than"}/>
				</div>
				<div className={style.DesertsSliderRight}>
				<Swiper
				spaceBetween={30}
				effect={'fade'}
				loop={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				  }}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade,Autoplay,Pagination]}
				className="SliderRight"
      >
		{
			DesertsSliderRightDatas.map(desert=>(
				<SwiperSlide key={desert.id}>
				<img src={desert.image}  />
			  </SwiperSlide>
			))
		}
                 </Swiper>
				</div>

			</div>
		</div>

	  </section>
  )
}
