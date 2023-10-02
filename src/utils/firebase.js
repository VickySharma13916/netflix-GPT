// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3K8ZVZ_9XMvfGmdsltQ8qnP5vAnu-rd8",
  authDomain: "netflixgpt-5945c.firebaseapp.com",
  projectId: "netflixgpt-5945c",
  storageBucket: "netflixgpt-5945c.appspot.com",
  messagingSenderId: "656943537304",
  appId: "1:656943537304:web:5e2e1a6d3784a59897c4ed",
  measurementId: "G-TWY8KEQ4WN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
// const analytics = getAnalytics(app);
export const auth = getAuth();
