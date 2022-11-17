import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
	const [menu, setMenu] = useState([]);
	const [animoList, setAnimoList] = useState([]);
	const [botanaList, setBotanaList] = useState([]);
	const [caldoList, setCaldoList] = useState([]);
	const [specialsList, setSpecialsList] = useState([]);
	const [plateMariscosList, setPlateMariscosList] = useState([]);
	const [plateMexicanosList, setPlateMexicanosList] = useState([]);
	const [sidesList, setSidesList] = useState([]);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/menu")
			.then((res) => {
				console.log(res.data);
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
					setCaldoList(soupArr);
					setSpecialsList(specialsArr);
					setPlateMariscosList(platesMariscosArr);
					setPlateMexicanosList(platesMexicanosArr);
					setSidesList(sidesArr);
					setLoaded(true);
				});
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div id="menu_main">
			{!loaded ? (
				<div>loading...</div>
			) : (
				<>
					<div className="food_category_container">
						{animoList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
						{botanaList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
						{caldoList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
						{specialsList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
						{plateMariscosList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
						{plateMexicanosList.map((food, i) => {
							return <p key={i}>{food.name}</p>;
						})}
					</div>
					<div>
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
