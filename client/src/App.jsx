import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./views/Menu";
// import "./styles.css";
import Nav from "./views/Nav";
import About from "./views/About";
import Footer from "./views/Footer";
import Contact from "./views/Contact";
import Landing from "./views/Landing";
// import ScrollButton from "./components/ScrollButton";

function App() {
	return (
		<div className="grid bg-[#A6D2E4]">
			<Fragment>
				<Nav />
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
				</Routes>
				{/* <ScrollButton /> */}
				<Footer />
			</Fragment>
		</div>
	);
}
export default App;
