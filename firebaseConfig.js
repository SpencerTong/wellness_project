import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDblp_IHYE-40ArPW1LpCF--sYvhmESZ1c",
  authDomain: "wellness-checklist-project.firebaseapp.com",
  projectId: "wellness-checklist-project",
  storageBucket: "wellness-checklist-project.appspot.com",
  messagingSenderId: "46065779071",
  appId: "1:46065779071:web:0b618cf60d79441a955a4a",
  measurementId: "G-TQLSB59C8B",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("not logged in!");
  }
});

export { firebaseApp, auth, db };
