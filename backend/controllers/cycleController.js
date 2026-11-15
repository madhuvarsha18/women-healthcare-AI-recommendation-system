const CycleTracker = require("../models/CycleTracker");
const { isDbConnected, getMemoryStore } = require("../config/db");

const createCycleEntry = async (req, res) => {
  try {
    const {
      periodStartDate,
      periodEndDate,
      cycleLength,
      flowLevel,
      symptoms,
      mood,
    } = req.body;

    if (isDbConnected()) {
      const cycle = await CycleTracker.create({
        userId: req.user.id,
        periodStartDate,
        periodEndDate,
        cycleLength,
        flowLevel,
        symptoms,
        mood,
      });

      return res.status(201).json(cycle);
    }

    const cycle = {
      _id: `cycle-${Date.now()}`,
      userId: req.user.id,
      periodStartDate,
      periodEndDate,
      cycleLength,
      flowLevel,
      symptoms,
      mood,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    getMemoryStore().cycles.push(cycle);
    return res.status(201).json(cycle);
  } catch (error) {
    res.status(500).json({
      message: "Failed to save cycle data",
    });
  }
};

const getMyCycles = async (req, res) => {
  try {
    if (isDbConnected()) {
      const cycles = await CycleTracker.find({
        userId: req.user.id,
      }).sort({
        createdAt: -1,
      });

      return res.status(200).json(cycles);
    }

    const cycles = getMemoryStore()
      .cycles.filter((cycle) => String(cycle.userId) === String(req.user.id))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return res.status(200).json(cycles);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch cycle data",
    });
  }
};

module.exports = {
  createCycleEntry,
  getMyCycles,
};