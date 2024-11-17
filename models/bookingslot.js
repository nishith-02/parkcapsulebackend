const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    parkingSlotId: {
      type: mongoose.Types.ObjectId,
      ref: "parkingModel",
    },
    type:{
      type:String,
      enum:["Guest","User"]
    },
    bookerId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    guestId: {
      type: mongoose.Types.ObjectId,
      ref: "Guest",
    },
    ownerId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    totalAmount: {
      type: Number,
    },
    amountPerHour: {
      type: Number,
    },
    amountToBePaid: {
      type: Number,
    },
    noOfFourWheelerBooked: {
      type: Number,
    },
    noOfTwoWheelerBooked: {
      type: Number,
    },
    hoursBooked: {
      type: Number,
    },
    place:{
      type:String
    },
    status: {
      type: String,
      enum: ["Active", "InActive"],
      default: "Active",
    },
    created: {
      type: Number,
      default: Date.now(),
    },
    parkingSlotImage:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

const bookingModel = mongoose.model("Booking", bookingSchema);
module.exports = bookingModel;
