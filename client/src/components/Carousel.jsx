import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper";
import fd1 from "./../assets/food/camarones_cachanilla_1.jpg";
import fd2 from "../assets/food/camarones_culichi_1.jpg";
import fd3 from "../assets/food/camarones_diabla_1.jpg";
import fd4 from "../assets/food/camarones_empanizado_1.jpg";
import fd5 from "../assets/food/chips_1.jpg";
import fd6 from "../assets/food/filete_1.jpg";
import fd7 from "../assets/food/filete_reyeno_1.jpg";
import fd8 from "../assets/food/molcajete_1.jpg";
import fd9 from "../assets/food/tacos_birria_1.jpg";
import fd10 from "../assets/food/torre_mariscos_1.jpg";
import fd11 from "../assets/food/tostadas_aguachile_1.jpg";
let food = [fd1, fd2, fd3, fd4, fd5, fd6, fd7, fd8, fd9, fd10, fd11];

register();

const createSlides = (foodList) => {
	return foodList.map((item, key) => {
		return (
			<SwiperSlide key={key}>
				<div className="flex">
					<div className="w-1/2 bg-slate-600">food</div>
					<img src={item} alt="food pic" className="w-1/2"></img>
				</div>
			</SwiperSlide>
		);
	});
};

const Carousel = () => {
	return (
		<div className="w-full">
			<Swiper
				modules={[Autoplay, Navigation, Pagination, EffectFade]}
				className="w-3/4"
				effect={"fade"}
				spaceBetween={30}
				centeredSlides={true}
				navigation={true}
				loop={true}
				pagination={{ clickable: true }}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
			>
				{createSlides(food)}
			</Swiper>
		</div>
	);
};

export default Carousel;
