const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  createCycleEntry,
  getMyCycles,
} = require(
  "../controllers/cycleController"
);

router.post(
  "/",
  authMiddleware,
  createCycleEntry
);

router.get(
  "/",
  authMiddleware,
  getMyCycles
);

module.exports = router;