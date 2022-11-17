import React, { Fragment } from "react";
import "./assets/style.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/landing_page/Landing";
import Menu from "./views/other_pages/Menu";
import Contact from "./views/other_pages/Contact";
import About from "./views/other_pages/About";
import ScrollButton from "./components/ScrollButton";
import Nav from "./views/general_views/Nav";
import Footer from "./views/general_views/Footer";
function App() {
	return (
		<div className="App">
			<Fragment>
				<div id="landing_nav">
					<Nav />
				</div>
				<div id="landing_body">
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</div>
				<ScrollButton />
				<Footer />
			</Fragment>
		</div>
	);
}
export default App;
