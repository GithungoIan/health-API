const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Department = require("../models/departmentsModel");

//crud
exports.createDepartment = catchAsync(async (req, res, next) => {
  const department = await Department.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      department,
    },
  });
});

exports.getDepartments = catchAsync(async (req, res, next) => {
  const departments = await Department.find();
  if (!departments) {
    return next(new AppError("No departments found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      departments,
    },
  });
});

exports.getDepartment = catchAsync(async (req, res, next) => {
  const department = await Department.findById(req.params.id);
  if (!department) {
    return next(new AppError("No departments found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      department,
    },
  });
});

exports.updateDepartment = catchAsync(async (req, res, next) => {
  const department = await Department.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!department) {
    return next(new AppError("No departments found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      department,
    },
  });
});

exports.deletedDepartment = catchAsync(async (req, res, next) => {
  const department = await Department.findByIdAndDelete(req.params.id);

  if (!department) {
    return next(new AppError("No departments found", 404));
  }
  res.status(204).json({
    status: "Success",
    data: null,
  });
});
