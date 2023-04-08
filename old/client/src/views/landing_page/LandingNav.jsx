import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import "../assets/style.css";
const LandingNav = () => {
	return (
		<div id="landing_nav_main">
			<h1 id="nav_title">Mr.Camaron</h1>
			<ul id="nav_list">
				<li>
					<RouterLink to="/Menu">Menu</RouterLink>
				</li>
				<li>
					<RouterLink to="/Contact">Contact</RouterLink>
				</li>
				<li>
					<Link activeClass="active" to="home_main" spy={true} smooth={true}>
						Home
					</Link>
				</li>
				{/* <li>
					<Link to="menu_main" spy={true} smooth={true}>
						Menu
					</Link>
				</li> */}
				<li>
					<Link to="about_main" spy={true} smooth={true}>
						About
					</Link>
				</li>
				<li>
					<Link to="about_main" spy={true} smooth={true}>
						Hours & Location
					</Link>
				</li>
				{/* <li>
					<Link to="contact_main" spy={true} smooth={true}>
						Contact
					</Link>
				</li> */}
			</ul>
		</div>
	);
};

export default LandingNav;
