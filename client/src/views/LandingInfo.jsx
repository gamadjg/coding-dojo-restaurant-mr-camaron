import React from "react";
import img1 from "../assets/IMG_0226_2.jpg";
import img2 from "../assets/IMG_0234.jpg";
import img3 from "../assets/IMG_0243.jpg";
import img4 from "../assets/IMG_0252.jpg";
import img5 from "../assets/IMG_0261.jpg";
import img6 from "../assets/IMG_0306.jpg";
import img7 from "../assets/IMG_0276.jpg";
import img8 from "../assets/IMG_0288.jpg";
import img9 from "../assets/IMG_0247.jpg";

const LandingInfo = () => {
	return (
		<div className="flex flex-wrap m-auto justify-center gap-5">
			<div className="flex rounded-xl w-96 h-52">
				<img src={img1} className="rounded-l-xl w-1/2" />
				<div className="flex justify-center w-1/2 rounded-r-xl bg-gray-300">
					<p>test</p>
				</div>
				{/* <div className=" bg-gray-300 rounded-r-xl">test</div> */}
			</div>
			<div className="flex rounded-xl w-96 h-52">
				<img src={img2} className="rounded-l-xl w-1/2" />
				<div className="flex justify-center w-1/2 rounded-r-xl bg-gray-300">
					test
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52">
				<img src={img3} className="rounded-l-xl w-1/2" />
				<div className="flex justify-center w-1/2 rounded-r-xl bg-gray-300">
					test
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52">
				<img src={img4} className="rounded-l-xl w-1/2" />
				<div className="flex justify-center w-1/2 rounded-r-xl bg-gray-300">
					test
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52">
				<img src={img5} className="rounded-l-xl w-1/2" />
				<div className="flex justify-center w-1/2 rounded-r-xl bg-gray-300">
					test
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52">
				<img src={img6} className="rounded-l-xl w-1/2" />
				<div className="flex justify-center w-1/2 rounded-r-xl bg-gray-300">
					test
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52">
				<img src={img7} className="rounded-l-xl w-1/2" />
				<div className="flex justify-center w-1/2 rounded-r-xl bg-gray-300">
					test
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52">
				<img src={img8} className="rounded-l-xl w-1/2" />
				<div className="flex justify-center w-1/2 rounded-r-xl bg-gray-300">
					test
				</div>
			</div>
			<div className="flex rounded-xl w-96 h-52">
				<img src={img9} className="rounded-l-xl w-1/2" />
				<div className="flex justify-center w-1/2 rounded-r-xl bg-gray-300">
					test
				</div>
			</div>
		</div>
	);
};

export default LandingInfo;
