import React from "react";
import "../../assets/style.css";
import GoogleMapsAPI from "../../components/GoogleMapsAPI";

const About = () => {
	return (
		<div id="about_main">
			<div>
				<h2>Open Daily</h2>
				<p>Monday - Thursday: 9am-10pm</p>
				<p>Friday - Sunday: 9am-11pm</p>
			</div>

			<div>
				<h2>Find Us At</h2>
				<a href="https://www.google.com/maps/place/Mr+Camar%C3%B3n/@37.6108596,-120.9932334,15z/data=!4m5!3m4!1s0x0:0x377ed9e316901b8d!8m2!3d37.6108596!4d-120.9932334">
					<p>1312 Crows Landing Rd</p>
					<p>Modesto, CA, 95351</p>
				</a>
				<p>(209) 544-1530</p>
			</div>
			<GoogleMapsAPI />
			<a href="https://www.google.com/maps/place/Mr+Camar%C3%B3n/@37.6108596,-120.9932334,15z/data=!4m5!3m4!1s0x0:0x377ed9e316901b8d!8m2!3d37.6108596!4d-120.9932334">
				<button id="map_button">Get Directions</button>
			</a>
		</div>
	);
};

export default About;
