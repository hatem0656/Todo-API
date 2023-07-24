require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user");
const cookieParser = require("cookie-parser");
const todoRoutes = require("./routes/todos");

//------ Express app -----------//
const app = express();

//--------- Middleware---------//
app.use(express.json());

app.use(
  cors({
    credentials: true,

    origin: process.env.ORIGIN_URL,
  })
);
app.use(cookieParser());
app.get("/favicon.ico", (_, res) => res.status(204));

//----------Routes---------//

app.use(userRoutes);

app.use("/api/todos", todoRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT, () => console.log("Listening to port 4000"));
  })
  .catch((err) => console.log(err));
