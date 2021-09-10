const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Patient = require("../models/patientsModel");

//crud
exports.createPatient = catchAsync(async (req, res, next) => {
  const patient = await Patient.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      patient,
    },
  });
});

exports.getPatients = catchAsync(async (req, res, next) => {
  const patients = await Patient.find();
  if (!patients) {
    return next(new AppError("No Patients found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      patients,
    },
  });
});

exports.getPatient = catchAsync(async (req, res, next) => {
  const patient = await Patient.findById(req.params.id);
  if (!patient) {
    return next(new AppError("No Patient found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      patient,
    },
  });
});

exports.updatePatient = catchAsync(async (req, res, next) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!patient) {
    return next(new AppError("No Patient found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      patient,
    },
  });
});

exports.deletedPatient = catchAsync(async (req, res, next) => {
  const patient = await Patient.findByIdAndDelete(req.params.id);

  if (!patient) {
    return next(new AppError("No Patient found", 404));
  }
  res.status(204).json({
    status: "Success",
    data: null,
  });
});
