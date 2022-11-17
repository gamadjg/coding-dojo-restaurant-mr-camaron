const { RestaurantContact } = require("../models/restaurantContact.model");
const { RestaurantFood } = require("../models/restaurantFood.model");

module.exports.menu = (req, res) => {
	RestaurantFood.find()
		.then((menuItems) => res.json(menuItems))
		.catch((err) =>
			res.json({ message: "ERROR, GET: Cannot get all players.", error: err })
		);
};

module.exports.food_create = (req, res) => {
	const {
		name,
		course,
		category_main,
		category_menu,
		type,
		primary_ingredient,
		price_reg,
		price_lg,
	} = req.body;
	RestaurantFood.create({
		name,
		course,
		category_main,
		category_menu,
		type,
		primary_ingredient,
		price_reg,
		price_lg,
	})
		.then((food) => {
			res.json(food);
		})
		.catch((err) => res.status(400).json(err));
};

module.exports.contact_create = (req, res) => {
	const { name, email, phone, message } = req.body;
	console.log(name, email, phone, message);
	RestaurantContact.create({
		name,
		email,
		phone,
		message,
	})
		.then((contact) => {
			res.json(contact);
		})
		.catch((err) => res.status(400).json(err));
};

// module.exports.getOne = (req, res) => {
// 	Restaurant.findOne({ _id: req.params.id })
// 		.then((player) => res.json({ player: player }))
// 		.catch((err) =>
// 			res.json({ message: "ERROR, GET: Cannot get player.", error: err })
// 		);
// };

// module.exports.update = (req, res) => {
// 	Restaurant.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
// 		.then((updatedRestaurant) => res.json({ player: updatedRestaurant }))
// 		.catch((err) =>
// 			res.json({ message: "ERROR, PUT: Cannot update player.", error: err })
// 		);
// };

// module.exports.delete = (req, res) => {
// 	Restaurant.deleteOne({ _id: req.params.id })
// 		.then((result) => res.json({ result: result }))
// 		.catch((err) =>
// 			res.json({ message: "ERROR, DELETE: Cannot delete player.", error: err })
// 		);
// };
