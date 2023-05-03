import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

register();

const createSlides = (foodList) => {
	foodList = foodList.map((item, key) => {
		return (
			<SwiperSlide key={key}>
				<img
					src={item}
					alt={`food picture #${key}`}
					className="w-[400px] rounded-full border-0 border-gray-400 swiper-lazy"
					loading="lazy"
				></img>
				<div className="swiper-lazy-preloader"></div>
			</SwiperSlide>
		);
	});
	return foodList;
};

const Carousel = (props) => {
	const food = props.images;
	return (
		<div className="w-full mb-5 px-10">
			<Swiper
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				spaceBetween={10}
				loop={true}
				breakpoints={{
					1000: {
						slidesPerView: 5,
					},
					600: {
						slidesPerView: 3,
					},
				}}
			>
				{createSlides(food)}
			</Swiper>
		</div>
	);
};

export default Carousel;
