import React from "react";
// import Nav from "../general_views/Nav";
// import LandingHome from "./LandingHome";
// import Footer from "../general_views/Footer";
// import "../../assets/style.css";
// import ScrollButton from "../../components/ScrollButton";
// import { Content, Heading } from "../../components/Styles";
// import LandingContainerContact from "./LandingContainerContact";
// import LandingContainerMenu from "./LandingContainerMenu";
import LandingInfo from "./LandingInfo";
import logo from "../assets/edited_logo_4.png";
import welcome_logo from "../assets/bienvenidos.png";
// import "../../../public/styles.css";

import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<div>
			<div className=" flex flex-col content-center items-center">
				<img src={logo} alt="mr.camaron logo" className="max-w-sm" />
				<img src={welcome_logo} alt="welcome logo" className="max-w-xs" />
			</div>
			<LandingInfo />
			<div className="content_container">
				Have a large party or any questions about the cuisine?
				<Link to="/contact">
					<button>Contact Us </button>
				</Link>
			</div>
			<div className="content_container"> Subscription form</div>
		</div>
	);
};

export default Landing;
