const { User } = require("../models");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    console.log("Inside register funtion")
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the fields"
      })
    }

    const user = await User.findOne({
      where: {
        email: email
      }
    });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already Exists"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword
    })

    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user: createUser
    })
  }
  catch (error) {
    console.error("Error in register controller:", error);
  }
}