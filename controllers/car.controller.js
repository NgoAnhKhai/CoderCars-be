const { sendResponse, AppError } = require("../helpers/utils.js");
const Car = require("../models/Car");
const carController = {};

carController.createCar = async (req, res, next) => {
  try {
    const info = req.body;

    if (!info || Object.keys(info).length === 0) {
      throw new AppError(400, "No data provided", "Create Car Error");
    }
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
  const { page = 1, limit = 5, ...filter } = req.query;
  try {
    const skip = (page - 1) * limit;

    const listOffFound = await Car.find(filter).skip(skip).limit(Number(limit));
    const total = await Car.countDocuments(filter);

    sendResponse(
      res,
      200,
      true,
      { data: { cars: listOffFound, page: Number(page), total } },
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
    // Kiểm tra ID
    if (!targetId) throw new AppError(400, "No ID provided", "Edit Car Error");
    // Kiểm tra dữ liệu
    if (!updateInfo || Object.keys(updateInfo).length === 0) {
      throw new AppError(400, "No data provided to update", "Edit Car Error");
    }
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
