import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import restaurant_title from "../assets/restaurant_name.png";
// import logo from "../../assets/edited_logo_3.png";
// import "../../public/styles.css";
import "../styles.css";

const StyledText = styled.h1`
	${
		"" /* background-image: linear-gradient(60deg, #e21143, #ffb03a);
	background-clip: text;
	color: transparent; */
	}
	background: -webkit-linear-gradient(#FFA500, #FF0000);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: black;
	font-size: xx-large;
`;
// text-shadow shadow-black
const Nav = () => {
	return (
		<div>
			{/* <img src={logo} alt="Mr.Camaron" id="nav_logo" /> */}
			{/* <div className="flex justify-between"> */}
			<ul className="flex justify-around bg-slate-500 items-center p-2">
				{/* <img src={restaurant_title} alt="Mr.Camaron" /> */}
				<img src={restaurant_title} className="w-3/12" />
				{/* <NavTitle className="text-6xl font-bold ">MR.CAMARON</NavTitle> */}
				<li>
					<Link to="/" className="underline">
						Home
					</Link>
				</li>
				<li>
					<Link to="/menu" className="underline">
						Menu
					</Link>
				</li>
				<li>
					<Link to="/contact" className="underline">
						Contact
					</Link>
				</li>
				<li>
					<Link to="/about" className="underline">
						About
					</Link>
				</li>
			</ul>
			{/* </div> */}
		</div>
	);
};

export default Nav;
