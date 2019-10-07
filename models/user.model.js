const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true, // must have a username
      unique: true, // requires the username to be unique
      trim: true, // removes whitespace off the end
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
