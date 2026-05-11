const mongoose = require('mongoose');

exports.connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vikram308:Vikram%40123@deploy-fullstack.rasydrc.mongodb.net/fullstack_deployment?retryWrites=true&w=majority&appName=Deploy-FullStack"
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

