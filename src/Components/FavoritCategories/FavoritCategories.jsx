import { Swiper, SwiperSlide } from 'swiper/react';
import { PropTypes } from 'prop-types';
import { Pagination } from 'swiper/modules';
import "./FavoritCategories.css"
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import sirrSite from '../../Helpers/Sirr';
import urls from '../../ApiValues/urls';
import PrCart from '../PrCart/PrCart';

export default function FavoriteCategories({ setProducts }) {
	const {categoryNameDatas}=useContext(GlobalContext)

	// const [categoryProductDatas, setCategoryProductDatas] = useState([])

	const handleSlideChange =  async (e) => {
		let searchParams = new URLSearchParams();
		if(!(e.realIndex === 0)) {
			let activeSlug = categoryNameDatas[e.realIndex + 1].slug;
			searchParams.set('categories[]', activeSlug);
		}
		try {
			let res = await sirrSite.api().get(`${urls.allProduct}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`);
			setProducts(res.data.data.data)
	   } catch (error) {
			console.log(error);	
	   }

	};

	return (
		<div className="index-favorite-categories">
			<Swiper className="index-favorite-categories-slider"   
				spaceBetween={'16px'}
				// centeredSlides={true}
				slideToClickedSlide={true}
				loop={true}
				slidesPerView={'auto'}
				slidesPerGroup={1}
				// slidesPerGroup={3}
				// slidesPerView={3}
				slidesPerGroupAuto={true}
				setWrapperSize={true}
				modules={[Pagination]}
				// onRealIndexChange={handleSlideChange}
				onClick={handleSlideChange}
				preventInteractionOnTransition={true}
				slidesOffsetBefore={24}
				pagination={{
					clickable: true,
					el: '.index-favorite-categories-slider-pagination',
					renderBullet: function (index, className) {
						return `<div class="${className}"></div>`;
					},
				}}
			>
				<SwiperSlide className={`index-favorite-categories-item`}>
					All
				</SwiperSlide>
				{categoryNameDatas.map((category) => (
					<SwiperSlide className={`index-favorite-categories-item`} key={category.id}>
						{category.title}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}


FavoriteCategories.propTypes = {
	categories: PropTypes.array
}