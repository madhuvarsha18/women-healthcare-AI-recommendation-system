const Assessment = require("../models/Assessment");
const { isDbConnected, getMemoryStore } = require("../config/db");

const getUserAssessments = (userId) => {
  if (isDbConnected()) {
    return Assessment.find({ user: userId }).sort({ createdAt: -1 });
  }

  return getMemoryStore()
    .assessments.filter(
      (item) => String(item.user) === String(userId)
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

const latestAssessment = async (req, res) => {
  try {
    if (isDbConnected()) {
      const assessment = await Assessment.findOne({ user: req.user.id }).sort({
        createdAt: -1,
      });

      return res.json(assessment);
    }

    const assessments = getUserAssessments(req.user.id);
    return res.json(assessments[0] || null);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch assessment" });
  }
};

const history = async (req, res) => {
  try {
    const assessments = await getUserAssessments(req.user.id);
    return res.json(assessments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch assessment history" });
  }
};

module.exports = {
  latestAssessment,
  history,
};