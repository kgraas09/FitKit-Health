const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("/", (req, res) => {
});

app.post("/", (req, res) => {
})

app.listen(PORT, () => {
  console.log(`Hello, Mr. Bond.  Your server is running on port ${PORT}`);
});
