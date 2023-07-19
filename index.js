require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const cookieParser = require("cookie-parser");
const todoRoutes = require("./routes/todos");
const { requireAuth, checkUser } = require("./middlewares/authMiddleware");

//------ Express app -----------//
const app = express();

//--------- Middleware---------//
app.use(express.json());

app.use(cookieParser());
app.use(
  "*",
  cors({
    origin: true,
    credentials: true,
  })
);

//-------Authentication---------//
// app.get("*", checkUser);

// app.get("/home", requireAuth);

app.get("/favicon.ico", (_, res) => res.status(204));
//----------Routes---------//
app.use(authRoutes);
app.use("/api/todos", todoRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT, () => console.log("Listening to port 4000"));
  })
  .catch((err) => console.log(err));
