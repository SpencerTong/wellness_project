import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

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
