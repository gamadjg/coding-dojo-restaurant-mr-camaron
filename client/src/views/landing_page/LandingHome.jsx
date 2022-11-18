import React from "react";
import "../../assets/style.css";
import logo from "../../assets/edited_logo_4.png";
import welcome_logo from "../../assets/bienvenidos.png";
const LandingHome = () => {
	return (
		<div id="home_main" className="container">
			<img src={logo} alt="mr.camaron logo" id="main_logo" />
			<img src={welcome_logo} alt="welcome logo" id="main_welcome_logo" />
		</div>
	);
};

export default LandingHome;
