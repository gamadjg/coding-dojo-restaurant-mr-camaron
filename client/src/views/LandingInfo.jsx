import React from "react";
import img1 from "../assets/IMG_0226_2.jpg";
import img2 from "../assets/IMG_0234.jpg";
import img3 from "../assets/IMG_0243.jpg";
import img4 from "../assets/IMG_0252.jpg";
import img5 from "../assets/IMG_0261.jpg";
import img6 from "../assets/IMG_0306.jpg";
import img8 from "../assets/IMG_0288.jpg";
import img9 from "../assets/IMG_0247.jpg";

const LandingInfo = () => {
	return (
		<div className="flex flex-wrap m-auto justify-center gap-5 py-5">
			<div className="flex rounded-xl w-96 h-52 shadow-lg">
				<img src={img1} className="rounded-l-xl w-1/2" />
				<div className="flex flex-col items-center justify-center w-1/2 rounded-r-xl bg-gray-300">
					{/* <p className="font-bold text-xl text-white outline-4"> */}
					<p className="font-semibold text-lg">Coctel de Camaron</p>
					<p className="font-semibold text-lg">(Shrimp Cocktail)</p>
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52 shadow-lg">
				<img src={img2} className="rounded-l-xl w-1/2" />
				<div className="flex flex-col items-center justify-center w-1/2 rounded-r-xl bg-gray-300">
					<p className="font-semibold text-lg">Siete Mares</p>
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52 shadow-lg">
				<img src={img3} className="rounded-l-xl w-1/2" />
				<div className="flex flex-col items-center justify-center w-1/2 rounded-r-xl bg-gray-300">
					<p className="font-semibold text-lg">Ceviche Pirata</p>
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52 shadow-lg">
				<img src={img4} className="rounded-l-xl w-1/2" />
				<div className="flex flex-col items-center justify-center w-1/2 rounded-r-xl bg-gray-300">
					<p className="font-semibold text-lg">Ostiones en su concha</p>
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52 shadow-lg">
				<img src={img5} className="rounded-l-xl w-1/2" />
				<div className="flex flex-col items-center justify-center w-1/2 rounded-r-xl bg-gray-300">
					<p className="font-semibold text-lg">Mojarra Frita</p>
					<p className="font-semibold text-lg">(Fried Silverbelly)</p>
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52 shadow-lg">
				<img src={img6} className="rounded-l-xl w-1/2" />
				<div className="flex flex-col items-center justify-center w-1/2 rounded-r-xl bg-gray-300">
					<p className="font-semibold text-lg">Camarones Costenos</p>
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52 shadow-lg">
				<img src={img8} className="rounded-l-xl w-1/2" />
				<div className="flex flex-col items-center justify-center w-1/2 rounded-r-xl bg-gray-300">
					<p className="font-semibold text-lg">Empanadas De Camaron</p>
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52 shadow-lg">
				<img src={img9} className="rounded-l-xl w-1/2" />
				<div className="flex flex-col items-center justify-center w-1/2 rounded-r-xl bg-gray-300">
					<p className="font-semibold text-lg">Camarones Cachanilla</p>
				</div>
			</div>
		</div>
	);
};

export default LandingInfo;
