const RestaurantController = require("../controllers/restaurant.controller");

module.exports = function (app) {
	app.post("/api/contact", RestaurantController.contactCreate);
	app.get("/api/foodUrls", RestaurantController.getFood);
};
