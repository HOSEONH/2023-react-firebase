// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ex-firebase-bef91.firebaseapp.com",
  projectId: "ex-firebase-bef91",
  storageBucket: "ex-firebase-bef91.appspot.com",
  messagingSenderId: "765947015187",
  appId: "1:765947015187:web:40862f3739d2023b920fe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);