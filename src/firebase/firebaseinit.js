import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA_pAuefBQGefXxf_KKwnf_mO3r7wmAt_4",
  authDomain: "nchu-irup-rebuild.firebaseapp.com",
  projectId: "nchu-irup-rebuild",
  storageBucket: "nchu-irup-rebuild.appspot.com",
  messagingSenderId: "360859722489",
  appId: "1:360859722489:web:5bd946434254e0d4e83828",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
