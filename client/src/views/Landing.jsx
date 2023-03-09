import React from "react";
import LandingInfo from "./LandingInfo";
import logo from "../assets/edited_logo_4.png";
import welcome_logo from "../assets/bienvenidos.png";
import img1 from "../assets/IMG_0226_2.jpg";
// import img2 from "../assets/IMG_0234.jpg";
import img3 from "../assets/IMG_0243.jpg";
import img4 from "../assets/IMG_0252.jpg";
import img5 from "../assets/IMG_0261.jpg";
import img6 from "../assets/IMG_0306.jpg";
import img2 from "../assets/IMG_0276.jpg";
import img8 from "../assets/IMG_0288.jpg";
import img9 from "../assets/IMG_0247.jpg";
import Contact from "./Contact";
const Landing = () => {
	return (
		<div className="flex flex-col items-center overflow-hidden w-screen">
			<img src={logo} alt="mr.camaron logo" className="w-96" />
			<img src={welcome_logo} alt="welcome logo" className="max-w-xl p-5" />
			<LandingInfo />
			{/* <div className="w-full">
				<div className="bg-slate-700 w-1/2 h-96 grid grid-cols-3">
					<img src={img1} className="w-52 h-48" />
					<img src={img2} className="w-52 h-48" />
					<img src={img3} className="w-52 h-48" />
					<img src={img4} className="w-52 h-48" />
					<img src={img5} className="w-52 h-48" />
					<img src={img6} className="w-52 h-48" />
				</div>
				<div className="w-1/2 bg-gray-400 flex items-center justify-center">
					<p className="text-center text-middle">Authentic Mexican Food</p>
				</div>
			</div> */}
			<div className="flex w-full">
				<div className="w-1/2 bg-gray-400 flex items-center justify-center">
					<p className="text-center text-middle">Live Music</p>
				</div>
				<div className="bg-slate-700 w-1/2 h-96"></div>
			</div>
			<Contact />
		</div>
	);
};

export default Landing;
