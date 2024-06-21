import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const firebaseConfig = {
  apiKey: "AIzaSyDblp_IHYE-40ArPW1LpCF--sYvhmESZ1c",
  authDomain: "wellness-checklist-project.firebaseapp.com",
  projectId: "wellness-checklist-project",
  storageBucket: "wellness-checklist-project.appspot.com",
  messagingSenderId: "46065779071",
  appId: "1:46065779071:web:0b618cf60d79441a955a4a",
  measurementId: "G-TQLSB59C8B",
};

const firebaseApp = initializeApp(firebaseConfig);
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
