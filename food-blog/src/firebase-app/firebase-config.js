import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBSKAsOl5zb8ZT97KESuyeOzUalwJXiv3Y",
  authDomain: "blogfood-553eb.firebaseapp.com",
  projectId: "blogfood-553eb",
  storageBucket: "blogfood-553eb.appspot.com",
  messagingSenderId: "587147823315",
  appId: "1:587147823315:web:1a02ca1d4c042438e22c26"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
