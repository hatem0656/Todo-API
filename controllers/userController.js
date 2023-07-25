require("dotenv").config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const { handleErrors } = require("../utils/errorHandler");

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

// controller actions
//-----------------------*****Sign UP*****-----------------------------///
const post_signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });

    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

//-----------------------*****Sign IN*****-----------------------------///
const post_signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      maxAge: maxAge * 1000,
      sameSite: "none",
    });

    res.status(200).json({ Id: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const get_signout = (_req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    secure: true,
    maxAge: 1,
    sameSite: "none",
  });
  res.status(200).json({ msg: "Logged Out" });
};

const get_user = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Not a Valid Token" });
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.status(200).json({ _id: user._id, name: user.name });

        next();
      }
    });
  } else {
    res.status(401).json({ message: "UnAuthenticated User" });
    next();
  }
};

module.exports = { post_signup, post_signin, get_signout, get_user };
