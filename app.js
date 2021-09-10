const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const patientRouter = require("./routes/patientRoutes");
const facilityRouter = require("./routes/facilityRoutes");
const departmentRouter = require("./routes/departmentRoutes");
const appointmentRouter = require("./routes/appointmentRoutes");
const AppError = require("./utils/appError");

const app = express();

//  Set Security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

//Data Sanitization againist NOSQL query Injection
app.use(mongoSanitize());

// Data Sanitization againist Xss
app.use(xss());

//Routes
app.use("/api/v1/patients", patientRouter);
app.use("/api/v1/facilities", facilityRouter);
app.use("/api/v1/departments", departmentRouter);
app.use("/api/v1/appointments", appointmentRouter);

// Test Middlewre
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 400));
});

module.exports = app;
