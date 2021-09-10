const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Facility = require("../models/facilityModel");

//crud
exports.createFacility = catchAsync(async (req, res, next) => {
  const facility = await Facility.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      facility,
    },
  });
});

exports.getFacilities = catchAsync(async (req, res, next) => {
  const facilities = await Facility.find();
  if (!facilities) {
    return next(new AppError("No Facilitys found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      facilities,
    },
  });
});

exports.getFacility = catchAsync(async (req, res, next) => {
  const facility = await Facility.findById(req.params.id);
  if (!facility) {
    return next(new AppError("No Facility found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      facility,
    },
  });
});

exports.updateFacility = catchAsync(async (req, res, next) => {
  const facility = await Facility.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!facility) {
    return next(new AppError("No Facilitys found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      facility,
    },
  });
});

exports.deletedFacility = catchAsync(async (req, res, next) => {
  const facility = await Facility.findByIdAndDelete(req.params.id);

  if (!facility) {
    return next(new AppError("No Facility found", 404));
  }
  res.status(204).json({
    status: "Success",
    data: null,
  });
});
