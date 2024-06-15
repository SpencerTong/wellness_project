const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
// Render the login page at the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "user" && password === "pass") {
    res.redirect("/home.html");
  } else {
    res.redirect("/login.html?error=Wrong login information!");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
