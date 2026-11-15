const mongoose = require("mongoose");

const memoryStore = {
  users: [],
  assessments: [],
  cycles: [],
};

const getMemoryStore = () => memoryStore;

const isDbConnected = () =>
  mongoose.connection.readyState === 1;

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log(
        "MONGO_URI not configured - using in-memory demo data store"
      );
      return false;
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
    return true;
  } catch (error) {
    console.log(
      "Database Connection Error - using in-memory demo data store"
    );
    return false;
  }
};

module.exports = {
  connectDB,
  isDbConnected,
  getMemoryStore,
};