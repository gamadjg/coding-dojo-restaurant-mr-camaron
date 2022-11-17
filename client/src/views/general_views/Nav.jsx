import React from "react";
import { Link } from "react-router-dom";
import restaurant_title from "../../assets/restaurant_name.png";

const Nav = () => {
	return (
		<div id="nav_main">
			<img src={restaurant_title} alt="Mr.Camaron" />
			<ul id="nav_list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/menu">Menu</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/about">Hours & Location</Link>
				</li>
				{/* <li>
					<Link activeClass="active" to="home_main" spy={true} smooth={true}>
						Home
					</Link>
				</li> */}
				{/* <li>
					<Link to="menu_main" spy={true} smooth={true}>
						Menu
					</Link>
				</li> */}
				{/* <li>
					<Link to="about_main" spy={true} smooth={true}>
						About
					</Link>
				</li>
				<li>
					<Link to="about_main" spy={true} smooth={true}>
						Hours & Location
					</Link>
				</li> */}
				{/* <li>
					<Link to="contact_main" spy={true} smooth={true}>
						Contact
					</Link>
				</li> */}
			</ul>
		</div>
	);
};

export default Nav;
