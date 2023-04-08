const { RestaurantContact } = require("../models/restaurantContact.model");
const { RestaurantFood } = require("../models/restaurantFood.model");
const { sendEmail } = require("../utils/nodemailer");

module.exports.menu = (req, res) => {
	RestaurantFood.find()
		.then((menuItems) => res.json(menuItems))
		.catch((err) =>
			res.json({ message: "ERROR, GET: Cannot get all food.", error: err })
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
	const { name, email, message } = req.body;
	RestaurantContact.create({
		name,
		email,
		message,
	})
		.then((contact) => {
			res.json(contact);
			sendEmail(name, email, message);
		})
		.catch((err) => res.status(400).json(err));
};
