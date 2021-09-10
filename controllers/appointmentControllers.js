const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Appointment = require("../models/appointmentsModel");

//crud
exports.createAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      appointment,
    },
  });
});

exports.getAppointments = catchAsync(async (req, res, next) => {
  const appointments = await Appointment.find();
  if (!appointments) {
    return next(new AppError("No appointments found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      appointments,
    },
  });
});

exports.getAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.findById(req.params.id);
  if (!appointment) {
    return next(new AppError("No appointments found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      appointment,
    },
  });
});

exports.updateAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!appointment) {
    return next(new AppError("No appointments found", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      appointment,
    },
  });
});

exports.deleteAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);

  if (!appointment) {
    return next(new AppError("No appointments found", 404));
  }
  res.status(204).json({
    status: "Success",
    data: null,
  });
});
