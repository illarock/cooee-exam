const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  getVehicles,
  sendVehicles,
} = require("../controllers/vehicle-controller");

router.get("/", getVehicles);
router.post("/", upload.single("file"), sendVehicles);

module.exports = {
  routes: router,
};
