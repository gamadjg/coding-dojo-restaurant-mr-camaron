import React, { Fragment } from "react";
import About from "./views/About";
import Footer from "./views/Footer";
import Landing from "./views/Landing";

function App() {
	return (
		<div className="grid bg-[#A6D2E4] overflow-hidden">
			<Landing />
			<About />
			<Footer />
		</div>
	);
}
export default App;
