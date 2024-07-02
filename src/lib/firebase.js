import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "quick-chat-75c40.firebaseapp.com",
  projectId: "quick-chat-75c40",
  storageBucket: "quick-chat-75c40.appspot.com",
  messagingSenderId: "393464701525",
  appId: "1:393464701525:web:6ac0c42c5d336fa792aadc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()