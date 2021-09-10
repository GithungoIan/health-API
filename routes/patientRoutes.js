const express = require("express");
const patientsController = require("../controllers/patientControllers");
const router = express.Router();

router
  .route("/")
  .post(patientsController.createPatient)
  .get(patientsController.getPatients);

router
  .route("/:id")
  .get(patientsController.getPatient)
  .patch(patientsController.updatePatient)
  .delete(patientsController.deletedPatient);

module.exports = router;
