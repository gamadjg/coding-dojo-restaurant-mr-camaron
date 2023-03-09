import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/edited_logo_4.png";
// import restaurant_title from "../assets/restaurant_name.png";
import "../styles.css";

const Nav = () => {
	return (
		<div className="flex m-auto p-5">
			<img src={logo} alt="mr.camaron logo" className="w-52" />
			<div className="grid grid-cols-[200px_200px_200px_200px] items-center justify-items-center text-center">
				<Link to="/" className="hover:font-semibold text-2xl">
					Home
				</Link>
				<Link to="/menu" className="hover:font-semibold text-2xl">
					Menu
				</Link>
				<Link to="/contact" className="hover:font-semibold text-2xl">
					Contact
				</Link>
				<Link to="/about" className="hover:font-semibold text-2xl">
					About
				</Link>
			</div>
		</div>
	);
};

export default Nav;
