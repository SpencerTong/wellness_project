import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
  collection,
  getDocs,
  addDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
  query,
  orderBy,
  limit,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import dotenv from "dotenv";

dotenv.config();
const apiKey = process.env.FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "wellness-checklist-project.firebaseapp.com",
  databaseURL: "https://wellness-checklist-project-default-rtdb.firebaseio.com",
  projectId: "wellness-checklist-project",
  storageBucket: "wellness-checklist-project.appspot.com",
  messagingSenderId: "46065779071",
  appId: "1:46065779071:web:0b618cf60d79441a955a4a",
  measurementId: "G-TQLSB59C8B",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const usersRef = collection(db, "users");

getDocs(usersRef).then((snapshot) => {
  console.log(snapshot.docs[0].data().username);
});
