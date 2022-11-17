import React from "react";
import "../../assets/style.css";
import ig_logo from "../../assets/Instagram_Glyph_Black.png";
import fb_logo3 from "../../assets/fb_logo3.png";

const Footer = () => {
	return (
		<div id="footer_main">
			<div id="footer_left">Created by: David Gama @ VariusIT</div>
			<div id="footer_mid">
				Follow us
				<span>
					<img
						className="media_logo"
						src={fb_logo3}
						alt="Facebook redirect icon"
					></img>
					<img
						className="media_logo"
						src={ig_logo}
						alt="Instragram redirect icon"
					></img>
				</span>
			</div>
			<div id="footer_left">
				<button>Signup for Notifications</button>
			</div>
		</div>
	);
};

export default Footer;
