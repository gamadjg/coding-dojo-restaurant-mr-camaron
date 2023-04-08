require("dotenv").config();
require("./config/mongoose.config");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

const app_routes = require("./routes/restaurant.routes");
app_routes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
