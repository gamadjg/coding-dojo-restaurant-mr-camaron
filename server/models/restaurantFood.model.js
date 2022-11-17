const mongoose = require("mongoose");

const RestaurantFood = new mongoose.Schema({
	name: String,
	course: String,
	category_main: String,
	category_menu: String,
	type: String,
	primary_ingredient: String,
	price_reg: Number,
	price_lg: Number,
});

module.exports.RestaurantFood = mongoose.model(
	"Restaurant_food",
	RestaurantFood
);
