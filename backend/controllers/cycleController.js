const CycleTracker = require("../models/CycleTracker");

const createCycleEntry = async (
  req,
  res
) => {
  try {
    const {
      periodStartDate,
      periodEndDate,
      cycleLength,
      flowLevel,
      symptoms,
      mood,
    } = req.body;

    const cycle =
      await CycleTracker.create({
        userId: req.user.id,
        periodStartDate,
        periodEndDate,
        cycleLength,
        flowLevel,
        symptoms,
        mood,
      });

    res.status(201).json(cycle);
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to save cycle data",
    });
  }
};

const getMyCycles = async (
  req,
  res
) => {
  try {
    const cycles =
      await CycleTracker.find({
        userId: req.user.id,
      }).sort({
        createdAt: -1,
      });

    res.status(200).json(cycles);
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch cycle data",
    });
  }
};

module.exports = {
  createCycleEntry,
  getMyCycles,
};