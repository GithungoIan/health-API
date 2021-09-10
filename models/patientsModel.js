const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide the name of the patient"],
  },
  phoneNumber: {
    type: String,
    required: [true, "please provide the phone number of the patient"],
  },
  group: {
    type: String,
    required: [true, "please provide the group of the patient"],
  },
  sex: {
    default: "male",
    enum: ["male", "female"],
    required: [true, "please provide the gender of the patient"],
  },
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
