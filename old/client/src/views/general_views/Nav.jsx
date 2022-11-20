import React from "react";
import { Link } from "react-router-dom";
// import restaurant_title from "../../assets/restaurant_name.png";
// import logo from "../../assets/edited_logo_3.png";

const Nav = () => {
	return (
		<>
			{/* <img src={logo} alt="Mr.Camaron" id="nav_logo" /> */}
			<div id="nav_main">
				{/* <img src={restaurant_title} alt="Mr.Camaron" /> */}
				<ul id="nav_list">
					<li>
						<Link to="/" className="nav_button">
							Home
						</Link>
					</li>
					|
					<li>
						<Link to="/menu" className="nav_button">
							Menu
						</Link>
					</li>
					|
					<li>
						<Link to="/contact" className="nav_button">
							Contact
						</Link>
					</li>
					|
					<li>
						<Link to="/about" className="nav_button">
							Hours & Location
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Nav;
