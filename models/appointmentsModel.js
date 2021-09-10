const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: String,
    required: [true, "Please provide the name of the patient"],
  },
  date: {
    type: Date,
    required: [true, "please provide the date of the appointment"],
  },
  department: {
    type: String,
    required: [true, "Please provide the name of the department"],
  },
  type: {
    type: String,
    required: [true, "Please provide the type of appointment"],
  },
  description: {
    type: String,
    required: [true, "Please provide some description of the appointment"],
  },
  notified: {
    type: Boolean,
    default: false,
  },
  reminded: {
    type: Boolean,
    default: false,
  },
  vistited: {
    type: Boolean,
    default: false,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
