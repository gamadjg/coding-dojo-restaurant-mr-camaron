import React from "react";
import { Link } from "react-router-dom";

const LandingContainerContact = () => {
	return (
		<div className="content_container">
			Have a large party or any questions about the cuisine?
			<Link to="/contact">
				<button>Contact Us </button>
			</Link>
		</div>
	);
};

export default LandingContainerContact;
