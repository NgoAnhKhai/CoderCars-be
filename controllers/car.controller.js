const { sendResponse, AppError } = require("../helpers/utils.js");
const Car = require("../models/Car");
const carController = {};

carController.createCar = async (req, res, next) => {
  try {
    // YOUR CODE HERE
  } catch (err) {
    // YOUR CODE HERE
  }
};

carController.getCars = async (req, res, next) => {
  // YOUR CODE HERE
  let { page, ...filterQuery } = req.query;

  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const cars = await Car.find();
    const total = await Car.countDocuments({ isDeleted: false });

    const response = {
      message: "Get Car List Successfully!",
      page: page,
      total: total,
      cars: cars,
    };

    res.status(200).send(response);
  } catch (err) {
    // YOUR CODE HERE
    next(err);
  }
};

carController.editCar = async (req, res, next) => {
  try {
    // YOUR CODE HERE
  } catch (err) {
    // YOUR CODE HERE
  }
};

carController.deleteCar = async (req, res, next) => {
  try {
    // YOUR CODE HERE
  } catch (err) {
    // YOUR CODE HERE
  }
};

module.exports = carController;
