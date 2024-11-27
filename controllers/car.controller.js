const { sendResponse, AppError } = require("../helpers/utils.js");
const Car = require("../models/Car");
const carController = {};

carController.createCar = async (req, res, next) => {
  try {
    const info = req.body;
    if (!info) throw new AppError(402, "Bad Request", "Create car Error");
    const created = await Car.create(info);
    sendResponse(
      res,
      200,
      true,
      { data: { car: created } },
      null,
      "Create Car Successfully"
    );
  } catch (err) {
    next(err);
  }
};

carController.getCars = async (req, res, next) => {
  const filter = {};
  try {
    const listOffFound = await Car.find(filter).limit(2);
    sendResponse(
      res,
      200,
      true,
      { data: { cars: listOffFound, page: 1, total: 1192 } },
      null,
      "Get Car List Successfully"
    );
  } catch (err) {
    next(err);
  }
};

carController.editCar = async (req, res, next) => {
  const targetId = req.params.id;
  const updateInfo = req.body;
  const option = { new: true };
  try {
    const updated = await Car.findByIdAndUpdate(targetId, updateInfo, option);
    sendResponse(
      res,
      200,
      true,
      { data: { car: updated } },
      null,
      "Successfully"
    );
  } catch (err) {
    // YOUR CODE HERE
    next(err);
  }
};

carController.deleteCar = async (req, res, next) => {
  const targetId = req.params.id;
  const options = { new: true };
  try {
    // YOUR CODE HERE
    const deleted = await Car.findByIdAndDelete(targetId, options);
    sendResponse(
      res,
      200,
      true,
      { data: { car: deleted } },
      null,
      "Delete Car successfully"
    );
  } catch (err) {
    // YOUR CODE HERE
    next(err);
  }
};

module.exports = carController;
