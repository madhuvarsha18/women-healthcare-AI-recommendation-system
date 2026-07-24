const mongoose = require("mongoose");

const cycleTrackerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    periodStartDate: {
      type: Date,
      required: true,
    },

    periodEndDate: {
      type: Date,
      required: true,
    },

    cycleLength: {
      type: Number,
      default: 28,
    },

    flowLevel: {
      type: String,
      enum: ["Light", "Medium", "Heavy"],
    },

    symptoms: {
      type: String,
    },

    mood: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "CycleTracker",
  cycleTrackerSchema
);