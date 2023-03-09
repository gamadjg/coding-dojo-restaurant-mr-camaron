import React from "react";
import GoogleMapsAPI from "../components/GoogleMapsAPI";

const About = () => {
	return (
		<div className="flex flex-col items-center overflow-hidden gap-5 w-full">
			<div className="text-center">
				<h2 className="text-xl font-bold pt-5">Open Hours</h2>
				<p className="py-1">Monday - Thursday: 9am-10pm</p>
				<p className="py-1">Friday - Sunday: 9am-11pm</p>
			</div>
			<div className="text-center">
				<h2 className="text-xl font-bold pt-5">Find Us At</h2>
				<a href="https://www.google.com/maps/place/Mr+Camar%C3%B3n/@37.6108596,-120.9932334,15z/data=!4m5!3m4!1s0x0:0x377ed9e316901b8d!8m2!3d37.6108596!4d-120.9932334">
					<p className="underline py-1">1312 Crows Landing Rd</p>
					<p className="underline py-1">Modesto, CA, 95351</p>
				</a>
			</div>
			<a
				href="https://www.google.com/maps/place/Mr+Camar%C3%B3n/@37.6108596,-120.9932334,15z/data=!4m5!3m4!1s0x0:0x377ed9e316901b8d!8m2!3d37.6108596!4d-120.9932334"
				className="w-48 border px-10 py-2 border-black rounded-full bg-[#F26D2F] font-bold hover:shadow-lg"
			>
				<button id="map_button">Get Directions</button>
			</a>
			<GoogleMapsAPI />
		</div>
	);
};

export default About;
