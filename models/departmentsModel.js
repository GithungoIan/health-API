const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a department"],
  },
});

const Department = mongoose.model("Department", departmentSchema);
module.exports = Department;
