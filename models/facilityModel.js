const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name of the facility"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide the phone number of the facility"],
  },
});

const Facility = mongoose.model("Facility", facilitySchema);
module.exports = Facility;
