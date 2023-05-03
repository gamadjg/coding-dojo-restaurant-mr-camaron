import React, { useState, useEffect } from "react";
import logo from "../assets/images/icons/square_logo.png";
import welcome_logo from "../assets/images/banners/bienvenidos.png";
import Carousel from "../components/Carousel";
import axios from "axios";

const Landing = () => {
	const [imageList, setImageList] = useState([]);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/foodUrls")
			.then((res) => {
				setImageList(res.data);
				setLoaded(true);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	// console.log(imageList);

	return (
		<>
			{!loaded ? (
				<></>
			) : (
				<div className="flex flex-col items-center overflow-hidden w-screen">
					<img src={logo} alt="mr.camaron logo" className="w-96" />
					<img src={welcome_logo} alt="welcome logo" className="max-w-xl p-5" />
					<Carousel images={imageList} />
				</div>
			)}
		</>
	);
};

export default Landing;
