const express = require("express");
const cors = require("cors");
// const { connection } = require("./config/dbConfig");
const { router } = require("./routes/authRoute");
require("dotenv").config();

const app = express();
app.use(cors());
const port = process.env.PORT || 8001;

app.use(express.json());


app.get("/home", (req, res) => {
  res.status(200).json({ message: "Welcome to the Home Page!", success: true });
})
app.use("/api", router)

// connection()

app.get("/home", (req, res) => {
  res.send("Hello, World!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});