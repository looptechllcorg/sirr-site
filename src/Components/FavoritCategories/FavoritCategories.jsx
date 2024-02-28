import { Swiper, SwiperSlide } from 'swiper/react';
import { PropTypes } from 'prop-types';
import { Pagination } from 'swiper/modules';
import "./FavoritCategories.css"

export default function FavoriteCategories({ categories }) {
	const handleSlideChange = (e) => {
		console.log(categories[e.realIndex]);
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
				onRealIndexChange={handleSlideChange}
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
				{categories?.map((category, index) => (
					<SwiperSlide className={`index-favorite-categories-item`} key={index}>
						{category}
					</SwiperSlide>
				))}
				<div className="index-favorite-categories-slider-pagination"></div>
			</Swiper>
		</div>
	)
}


FavoriteCategories.propTypes = {
	categories: PropTypes.array
}