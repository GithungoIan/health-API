const express = require("express");
const departmentsController = require("../controllers/departmentControllers");
const router = express.Router();

router
  .route("/")
  .post(departmentsController.createDepartment)
  .get(departmentsController.getDepartments);

router
  .route("/:id")
  .get(departmentsController.getDepartment)
  .patch(departmentsController.updateDepartment)
  .delete(departmentsController.deletedDepartment);

module.exports = router;
