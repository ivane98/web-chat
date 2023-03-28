import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

//chat-app (name on firebase)

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-app-8356d.firebaseapp.com",
  projectId: "chat-app-8356d",
  storageBucket: "chat-app-8356d.appspot.com",
  messagingSenderId: "752979954641",
  appId: "1:752979954641:web:d4060e25940b2fb8faaef0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
