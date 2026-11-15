const Assessment = require("../models/Assessment");
const { isDbConnected, getMemoryStore } = require("../config/db");

const getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    let assessments = [];

    if (isDbConnected()) {
      assessments = await Assessment.find({ user: userId }).sort({ createdAt: 1 });
    } else {
      assessments = getMemoryStore()
        .assessments.filter((item) => String(item.user) === String(userId))
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (assessments.length === 0) {
      return res.json({
        latest: null,
        history: [],
        stats: {},
        chartData: [],
        conditionDistribution: [],
        riskDistribution: [],
      });
    }

    const latest = assessments[assessments.length - 1];
    const totalAssessments = assessments.length;

    const averageWellness = (
      assessments.reduce(
        (sum, item) => sum + Number(item.overall_wellness_score || 0),
        0
      ) / totalAssessments
    ).toFixed(1);

    const averageBMI = (
      assessments.reduce(
        (sum, item) => sum + Number(item.bmi || 0),
        0
      ) / totalAssessments
    ).toFixed(1);

    const stats = {
      totalAssessments,
      averageWellness,
      averageBMI,
    };

    const chartData = assessments.map((item) => ({
      date: new Date(item.createdAt).toLocaleDateString(),
      wellness: Number(item.overall_wellness_score || 0),
      bmi: Number(item.bmi || 0),
      condition: item.condition,
      risk: item.risk_category,
    }));

    const conditionMap = {};
    assessments.forEach((item) => {
      conditionMap[item.condition] = (conditionMap[item.condition] || 0) + 1;
    });

    const conditionDistribution = Object.keys(conditionMap).map((key) => ({
      name: key,
      value: conditionMap[key],
    }));

    const riskMap = {};
    assessments.forEach((item) => {
      riskMap[item.risk_category] = (riskMap[item.risk_category] || 0) + 1;
    });

    const riskDistribution = Object.keys(riskMap).map((key) => ({
      name: key,
      value: riskMap[key],
    }));

    res.json({
      latest,
      history: assessments,
      stats,
      chartData,
      conditionDistribution,
      riskDistribution,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Dashboard Error",
    });
  }
};

module.exports = {
  getDashboard,
};