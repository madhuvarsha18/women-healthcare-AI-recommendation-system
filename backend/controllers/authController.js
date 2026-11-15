const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  isDbConnected,
  getMemoryStore,
} = require("../config/db");

const makeDemoId = () =>
  `demo-${Date.now()}-${Math.random()
    .toString(16)
    .slice(2, 8)}`;

const getUserLookup = async (email) => {
  if (isDbConnected()) {
    return User.findOne({ email });
  }

  return getMemoryStore().users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );
};

const registerUser = async (req, res) => {
  try {
    console.log("REGISTER BODY:", req.body);
    const {
      name,
      email,
      password,
      age,
      language,
      healthGoal,
    } = req.body;

    const existingUser = await getUserLookup(email);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (isDbConnected()) {
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        age,
        language,
        healthGoal,
      });

      await newUser.save();

      return res.status(201).json({
        message: "Registration successful",
      });
    }

    const newUser = {
      _id: makeDemoId(),
      id: makeDemoId(),
      name,
      email,
      password: hashedPassword,
      age,
      language,
      healthGoal,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    getMemoryStore().users.push(newUser);

    return res.status(201).json({
      message: "Registration successful",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserLookup(email);

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id || user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id || user.id,
        name: user.name,
        email: user.email,
        language: user.language,
        healthGoal: user.healthGoal,
      },
    });
  } catch (error) {
    console.error("REGISTER ERROR:");
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};