const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, //convert the email to lowercase
    // validate: ---     will make validation on frontend
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});
