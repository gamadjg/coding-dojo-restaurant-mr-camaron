import React, { Fragment, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/style.css";
import axios from "axios";
import Menu from "./views/other_pages/Menu";
import Nav from "./views/general_views/Nav";
import About from "./views/other_pages/About";
import Footer from "./views/general_views/Footer";
import Contact from "./views/other_pages/Contact";
import Landing from "./views/landing_page/Landing";
import ScrollButton from "./components/ScrollButton";

function App() {
	const [animoList, setAnimoList] = useState([]);
	const [botanaList, setBotanaList] = useState([]);
	const [soupList, setSoupList] = useState([]);
	const [specialsList, setSpecialsList] = useState([]);
	const [platesMariscosList, setPlatesMariscosList] = useState([]);
	const [platesMexicanosList, setPlatesMexicanosList] = useState([]);
	const [sidesList, setSidesList] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/menu")
			.then((res) => {
				let animoArr = [];
				let botanaArr = [];
				let soupArr = [];
				let specialsArr = [];
				let platesMariscosArr = [];
				let platesMexicanosArr = [];
				let sidesArr = [];
				res.data.forEach((food) => {
					switch (food.category_menu) {
						case "para_leventar_el_animo":
							animoArr.push(food);
							break;
						case "botanas_de_mariscos":
							botanaArr.push(food);
							break;
						case "caldos_soup":
							soupArr.push(food);
							break;
						case "especialidades_de_la_casa":
							specialsArr.push(food);
							break;
						case "platillos_de_mariscos":
							platesMariscosArr.push(food);
							break;
						case "platillos_mexicanos":
							platesMexicanosArr.push(food);
							break;
						case "sides_extras":
							sidesArr.push(food);
							break;
						default:
							break;
					}
					setAnimoList(animoArr);
					setBotanaList(botanaArr);
					setSoupList(soupArr);
					setSpecialsList(specialsArr);
					setPlatesMariscosList(platesMariscosArr);
					setPlatesMexicanosList(platesMexicanosArr);
					setSidesList(sidesArr);
				});
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="App">
			<Fragment>
				<div id="nav">
					<Nav />
				</div>
				<div id="landing_body">
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route
							path="/menu"
							element={
								<Menu
									animoArr={animoList}
									botanaArr={botanaList}
									soupArr={soupList}
									specialsArr={specialsList}
									platesMariscosArr={platesMariscosList}
									platesMexicanosArr={platesMexicanosList}
									sidesArr={sidesList}
								/>
							}
						/>
						<Route path="/contact" element={<Contact />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</div>
				<ScrollButton />
				<div id="landing_footer">
					<Footer />
				</div>
			</Fragment>
		</div>
	);
}
export default App;
