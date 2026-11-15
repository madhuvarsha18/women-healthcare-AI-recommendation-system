const express = require("express");
const cors =require("cors");
const dotenv = require("dotenv");

dotenv.config();

const { connectDB } = require("./config/db");
connectDB();

const app = express();

app.use(cors({
    origin: [
      "https://hercare-women-wellness-demo-app.netlify.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
}

));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Women Wellness API Running");
});

/* ---------------- ROUTES ---------------- */

const authRoutes = require("./routes/authRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
const assessmentRoutes = require("./routes/assessmentRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const cycleRoutes = require("./routes/cycleRoutes");

app.use("/api/auth", authRoutes);

app.use("/api/prediction", predictionRoutes);

app.use("/api/assessment", assessmentRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/cycles", cycleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});