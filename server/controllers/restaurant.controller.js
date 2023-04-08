const { RestaurantContact } = require("../models/restaurantContact.model");
const { sendEmail } = require("../utils/nodemailer");

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
