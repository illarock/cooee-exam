const vehicles = require("../models/vehicles.json");
const fs = require("fs");

// @desc Get Vechicles
// @route GET /api/vechicles
// @access Public
const getVehicles = (req, res) => {
  res.status(200).json(vehicles);
};

// @desc Post Vechicles
// @route POST /api/vechicles
// @access Public
const sendVehicles = (req, res) => {
  res.status(200).json(req.body);
};

module.exports = { getVehicles, sendVehicles };
