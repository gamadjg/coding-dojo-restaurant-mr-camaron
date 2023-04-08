const RestaurantController = require("../controllers/restaurant.controller");

module.exports = function (app) {
	app.post("/api/contact", RestaurantController.contact_create);
};
