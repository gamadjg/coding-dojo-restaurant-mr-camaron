require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
const dburi = process.env.DBURI;
const app_routes = require("./routes/restaurant.routes");

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
app_routes(app);

mongoose
	.connect(dburi)
	.then((result) => {
		app.listen(port, () => console.log(`Listening on port: ${port}`));
	})
	.catch((err) => {
		console.log(err);
	});
