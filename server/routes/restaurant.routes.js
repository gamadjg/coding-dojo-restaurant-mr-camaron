const RestaurantController = require("../controllers/restaurant.controller");

module.exports = function (app) {
	app.get("/api/menu", RestaurantController.menu);
	// app.post("/api/food/new", RestaurantController.food_create);
	app.post("/api/contact", RestaurantController.contact_create);
};
