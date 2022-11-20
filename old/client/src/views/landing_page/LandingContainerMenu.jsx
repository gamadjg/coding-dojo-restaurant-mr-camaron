import React from "react";
import { Link } from "react-router-dom";

const LandingContainerMenu = () => {
	return (
		<div id="landing_menu" className="container">
			<h2>Mexican Seafood Cuisine</h2>
			<p>From las playas de Sinaloa to the beachs of Veracruz</p>
			<Link to="/menu">See Our Menu</Link>
		</div>
	);
};

export default LandingContainerMenu;
