import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIPPdVohQrbuc2G3Uw0J5cyoAfWRAvmsY",
  authDomain: "react-project-91033.firebaseapp.com",
  projectId: "react-project-91033",
  storageBucket: "react-project-91033.appspot.com",
  messagingSenderId: "388206344081",
  appId: "1:388206344081:web:1b2a9c63e8226006544c30"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)