// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyQVwSZJW3fbLxgfyYSP--172mAYuinTg",
  authDomain: "netflixgpt-c9846.firebaseapp.com",
  projectId: "netflixgpt-c9846",
  storageBucket: "netflixgpt-c9846.appspot.com",
  messagingSenderId: "885713097529",
  appId: "1:885713097529:web:ff527c8fb94982af814ee8",
  measurementId: "G-B4J6M0ZDNP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
