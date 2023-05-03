import React from "react";
import logo from "../assets/images/icons/square_logo.png";
import welcome_logo from "../assets/images/banners/bienvenidos.png";
import Carousel from "../components/Carousel";
import images from "../helpers/food-image-urls.js";

const Landing = () => {
	return (
		<div className="flex flex-col items-center overflow-hidden w-screen">
			<img src={logo} alt="mr.camaron logo" className="w-96" />
			<img src={welcome_logo} alt="welcome logo" className="max-w-xl p-5" />
			<Carousel images={images.urls} />
		</div>
	);
};

export default Landing;
