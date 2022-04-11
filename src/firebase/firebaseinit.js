import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_pAuefBQGefXxf_KKwnf_mO3r7wmAt_4",
  authDomain: "nchu-irup-rebuild.firebaseapp.com",
  projectId: "nchu-irup-rebuild",
  storageBucket: "nchu-irup-rebuild.appspot.com",
  messagingSenderId: "360859722489",
  appId: "1:360859722489:web:5bd946434254e0d4e83828",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
