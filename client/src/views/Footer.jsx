import React from "react";
// import "../../assets/style.css";
import ig_logo from "../assets/Instagram_Glyph_Black.png";
import fb_logo3 from "../assets/fb_logo3.png";
import menu from "../assets/menu.pdf";

const Footer = () => {
	return (
		<div className="flex items-center justify-between">
			{/* Created by: David Gama @ VariusIT */}
			<div id="footer_left">
				<a download="menu.pdf" href={menu}>
					Download the menu
				</a>
			</div>
			<div className="flex justify-between gap-2">
				<a href="https://www.facebook.com/mariscosmrcamaronmodesto">
					<img
						src={fb_logo3}
						alt="Facebook redirect icon"
						className="h-6"
					></img>
				</a>
				<a href="https://www.instagram.com/mariscosmr.camaron/">
					<img src={ig_logo} alt="Instragram redirect icon" className="h-6" />
				</a>
			</div>
			<div id="footer_left">
				<button>Signup for Notifications</button>
			</div>
		</div>
	);
};

export default Footer;
