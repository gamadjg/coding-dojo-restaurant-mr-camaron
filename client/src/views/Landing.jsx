import React from "react";
import logo from "../assets/square_logo.png";
import welcome_logo from "../assets/bienvenidos.png";
import Carousel from "../components/Carousel";
const Landing = () => {
	return (
		<div className="flex flex-col items-center overflow-hidden w-screen">
			<img src={logo} alt="mr.camaron logo" className="w-96" />
			<img src={welcome_logo} alt="welcome logo" className="max-w-xl p-5" />
			<Carousel />
		</div>
	);
};

export default Landing;
