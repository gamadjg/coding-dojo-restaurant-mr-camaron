import React, { useEffect, useState } from "react";
import axios from "axios";
import animo_logo from "../assets/para_levantar_el_animo.png";
import botana_logo from "../assets/botanas_de_mariscos.png";
import soups_logo from "../assets/caldos.png";
import specials_logo from "../assets/specials.png";
import plates_mariscos_logo from "../assets/plate_mariscos.png";
import plates_mexican_logo from "../assets/plate_mexican.png";
import extras_logo from "../assets/extras.png";
const Menu = () => {
	// const {
	// 	animoArr,
	// 	botanaArr,
	// 	soupArr,
	// 	specialsArr,
	// 	platesMariscosArr,
	// 	platesMexicanosArr,
	// 	sidesArr,
	// } = props;

	const [animoList, setAnimoList] = useState([]);
	const [botanaList, setBotanaList] = useState([]);
	const [soupList, setSoupList] = useState([]);
	const [specialsList, setSpecialsList] = useState([]);
	const [platesMariscosList, setPlatesMariscosList] = useState([]);
	const [platesMexicanosList, setPlatesMexicanosList] = useState([]);
	const [sidesList, setSidesList] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/menu")
			.then((res) => {
				// console.log(res.data);
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
					setLoaded(true);
				});
			})
			.catch((err) => console.log(err));

		// setAnimoList(animoArr);
		// setBotanaList(botanaArr);
		// setSoupList(soupArr);
		// setSpecialsList(specialsArr);
		// setPlatesMariscosList(platesMariscosArr);
		// setPlatesMexicanosList(platesMexicanosArr);
		// setSidesList(sidesArr);
		// setLoaded(true);
	}, []);

	return (
		<div id="menu_main" className="container">
			{!loaded ? (
				<div>loading...</div>
			) : (
				<>
					<div className="food_category_container">
						<img
							src={animo_logo}
							alt="Para levantar el animo"
							className="menu_logo"
						/>
						{animoList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
						<img
							src={botana_logo}
							alt="Botanas de Mariscos"
							className="menu_logo"
						/>
						{botanaList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
						<img src={soups_logo} alt="Caldos/Soups" className="menu_logo" />
						{soupList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
						<img src={specials_logo} alt="Specials" className="menu_logo" />
						{specialsList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
						<img
							src={plates_mariscos_logo}
							alt="Platillos de Mariscos"
							className="menu_logo"
						/>
						{platesMariscosList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
						<img
							src={plates_mexican_logo}
							alt="Platillos Mexicanos"
							className="menu_logo"
						/>
						{platesMexicanosList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
						<img
							src={extras_logo}
							alt="Extras"
							className="menu_secondary_logo"
						/>
						{sidesList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default Menu;
