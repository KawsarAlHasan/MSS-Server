import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from './Routes/AuthRoute.js'

const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose.connect(process.env.MONGO_DB).then(() =>
  app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT);
  })
);

// use routes
app.use('/auth', AuthRoute)