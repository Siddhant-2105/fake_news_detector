const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/predict", async (req, res) => {
  try {
    console.log("Text from React:", req.body.text);

    const response = await axios.post("http://127.0.0.1:5001/predict", {
      text: req.body.text,
    });

    console.log("Python Response:", response.data);

    res.json(response.data);

  } catch (error) {
    console.log("ERROR:", error.message);
    res.json({ result: "Server error ❌" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});