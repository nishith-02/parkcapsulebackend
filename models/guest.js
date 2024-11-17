const mongoose = require("mongoose");
const guestSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    CreatedAt: {
      type: Date,
      default: Date.now(),
    }
  },
  {
    timestamps: true,
  }
);

const Guest = mongoose.model("Guest", guestSchema);
module.exports = Guest;
