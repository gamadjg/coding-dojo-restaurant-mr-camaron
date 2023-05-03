const {
	RestaurantContact,
	RestaurantFood,
} = require("../models/restaurantContact.model");
const { sendEmail } = require("../utils/nodemailer");

module.exports.contactCreate = (req, res) => {
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

module.exports.getFood = (req, res) => {
	RestaurantFood.find()
		.then((food) => {
			food = food.map((item) => {
				return item.cdnUrl;
			});
			res.json(food);
		})
		.catch((err) => res.status(400).json(err));
};
