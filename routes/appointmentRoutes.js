const express = require("express");
const appointmentsController = require("../controllers/appointmentControllers");
const router = express.Router();

router
  .route("/")
  .post(appointmentsController.createAppointment)
  .get(appointmentsController.getAppointments);

router
  .route("/:id")
  .get(appointmentsController.getAppointment)
  .patch(appointmentsController.updateAppointment)
  .delete(appointmentsController.deleteAppointment);

module.exports = router;
