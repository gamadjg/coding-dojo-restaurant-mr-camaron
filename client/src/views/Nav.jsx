import React from "react";
import { Link } from "react-router-dom";
// import restaurant_title from "../assets/restaurant_name.png";
import "../styles.css";

const Nav = () => {
	return (
		<div className="flex m-auto py-5">
			<div className="grid grid-cols-[200px_200px_200px] items-center justify-items-center text-center">
				<Link to="/" className="hover:font-semibold text-2xl hover:underline">
					Home
				</Link>
				<Link
					to="/menu"
					className="hover:font-semibold text-2xl hover:underline"
				>
					Menu
				</Link>
				<Link
					to="/about"
					className="hover:font-semibold text-2xl hover:underline"
				>
					About
				</Link>
			</div>
		</div>
	);
};

export default Nav;
