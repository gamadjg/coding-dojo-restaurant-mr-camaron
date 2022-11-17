const RestaurantController = require("../controllers/restaurant.controller");

module.exports = function (app) {
	// GET ALL
	app.get("/api/menu", RestaurantController.menu);
	// GET ONE
	// app.get("/api/players/:id", PlayerController.getOne);
	// POST FOOD
	app.post("/api/food/new", RestaurantController.food_create); // g2g
	// POST
	app.post("/api/user/contact/new", RestaurantController.contact_create); // g2g
	// PUT ONE
	// app.put("/api/players/:id/edit", PlayerController.update); // g2g
	// DELETE ONE
	// app.delete("/api/players/:id/delete", PlayerController.delete); //g2g
};
