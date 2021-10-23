const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXEPTION 🔥 ..shutting down");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./.env" });
const app = require("./app");

const DB = process.env.ONLINE_DATABASE;
const port = process.env.PORT;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection established"));

const server = app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(" unhandledRejection! 🔥  Shuting down....");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
