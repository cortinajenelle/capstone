import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import farmers from "./routers/farmers.js";

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const PORT = process.env.PORT || 4040;

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

const cors = (request, response, next) => {
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

app.get("/status", (request, response) => {
  response.json({ message: "Service healthy" });
});

app.get("/map/:farmer", (request, response) => {
  const farm = request.params.location;
  const min = 1;
  const max = 10;
  // need correct syntax for this one --> const farmers = Math.floor(Math.random() * (max - min + 1) + min);
  response.json({
    opportunity: `The farmers at ${farm} are accepting ${service} as we speak!`
  });
});

app.post("/add", (request, response) => {
  const num1 = request.body.numberOne;
  const num2 = request.body.numberTwo;
  const responseBody = {
    sum: num1 + num2
  };
  response.json(responseBody);
});

app.use("/farmers", farmers);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
