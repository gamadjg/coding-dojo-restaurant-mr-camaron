import React from "react";
// import Nav from "../general_views/Nav";
import LandingHome from "./LandingHome";
// import Footer from "../general_views/Footer";
import "../../assets/style.css";
// import ScrollButton from "../../components/ScrollButton";
// import { Content, Heading } from "../../components/Styles";
import LandingContainerContact from "./LandingContainerContact";
import LandingContainerMenu from "./LandingContainerMenu";

const Landing = () => {
	return (
		<>
			<div className="landing_container">
				<LandingHome />
			</div>
			<div className="landing_container">
				<LandingContainerMenu />
			</div>
			<div className="landing_container">
				<LandingContainerContact />
			</div>
		</>
	);
};

export default Landing;
