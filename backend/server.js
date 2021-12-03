const app = require("./app");

const dotenv = require("dotenv");

//Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR:${err.stack}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

const connectDatabase = require("./config/database");

// setting up config file
dotenv.config({ path: "backend/config/config.env" });

// connecting to database

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//Handling unhandled promise rejection warnings
process.on("unhandledRejection", (err) => {
  console.log(`ERROR:${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
