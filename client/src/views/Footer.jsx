import React from "react";
import ig_logo from "../assets/Instagram_Glyph_Black.png";
import fb_logo3 from "../assets/fb_logo3.png";
import menu from "../assets/menu.pdf";
// import Contact from "./Contact";

const Footer = () => {
	return (
		<div className="flex items-center justify-center bg-slate-500 gap-10 p-5">
			{/* <Contact /> */}
			<div className="flex justify-between gap-2 text-gray-100 text-sm font-bold mb-2">
				<a download="menu.pdf" href={menu}>
					Download the menu
				</a>
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
				<button>Signup for Notifications</button>
			</div>
		</div>
	);
};

export default Footer;
