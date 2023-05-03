const mongoose = require("mongoose");

var validateEmail = function (email) {
	var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return re.test(email);
};

const RestaurantContact = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name cannot be empty."],
		minLength: [3, "Name cannot be less than 3 characters long."],
	},

	email: {
		type: String,
		trim: true,
		lowercase: true,
		// unique: true,
		required: [true, "Email cannot be empty."],
		validate: [validateEmail, "Please fill a valid email address"],
	},

	phone: {
		type: String,
		required: [false],
		// match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
	},

	message: {
		type: String,
		required: [true, "Message cannot be empty."],
	},
});

const RestaurantFood = new mongoose.Schema({
	cdnUrl: {
		type: String,
	},
});

module.exports.RestaurantContact = mongoose.model(
	"Restaurant_contact",
	RestaurantContact
);

module.exports.RestaurantFood = mongoose.model(
	"Restaurant_food",
	RestaurantFood
);
