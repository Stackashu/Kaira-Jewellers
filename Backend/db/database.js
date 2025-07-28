const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected with Mongoose");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};



module.exports =  connectDB;
