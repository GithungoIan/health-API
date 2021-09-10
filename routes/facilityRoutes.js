const express = require("express");
const facilityController = require("../controllers/facilityControllers");
const router = express.Router();

router
  .route("/")
  .post(facilityController.createFacility)
  .get(facilityController.getFacilities);

router
  .route("/:id")
  .get(facilityController.getFacility)
  .patch(facilityController.updateFacility)
  .delete(facilityController.deletedFacility);

module.exports = router;
