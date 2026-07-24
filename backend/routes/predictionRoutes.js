const express = require("express");

const router = express.Router();
const authMiddleware =
require("../middleware/authMiddleware");
const {
  predictCondition,
} = require("../controllers/predictionController");

router.post(
  "/predict",
  authMiddleware,
  predictCondition
);
router.get("/test", (req, res) => {
  res.json({
    message: "Prediction Route Working"
  });
});
module.exports = router;