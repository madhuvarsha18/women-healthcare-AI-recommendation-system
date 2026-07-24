const mongoose = require("mongoose");

const userCheckInSchema = new mongoose.Schema(
  {
    userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
},
    stressLevel: {
      type: Number,
      required: true,
    },

    sleepHours: {
      type: Number,
      required: true,
    },

    symptoms: {
      type: String,
      required: true,
    },

    mood: {
      type: String,
      default: "Normal",
    },

    hydration: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "UserCheckIn",
  userCheckInSchema
);