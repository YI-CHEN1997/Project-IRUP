import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy9ufW-muN1SfigFlDEU467_Kh2wF7uhc",
  authDomain: "irup-team-1.firebaseapp.com",
  projectId: "irup-team-1",
  storageBucket: "irup-team-1.appspot.com",
  messagingSenderId: "1075727289969",
  appId: "1:1075727289969:web:747d2f880ea77d892dd5d0",
  measurementId: "G-QSKRJN5K7C"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
