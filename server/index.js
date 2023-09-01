const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { errorHandler } = require("./middleware/error-middleware");
const credentials = require("./middleware/credentials");
const port = process.env.PORT || 5000;

//Routes
const vehicleRoutes = require("./routes/vehicle-routes");

const app = express();

app.use(credentials);
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/vehicles", vehicleRoutes.routes);

app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
