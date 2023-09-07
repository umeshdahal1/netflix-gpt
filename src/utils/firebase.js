// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsH9QkTSclxfsmoXWtxlBCr2kFJSEw414",
  authDomain: "netflixgpt-dd3b9.firebaseapp.com",
  projectId: "netflixgpt-dd3b9",
  storageBucket: "netflixgpt-dd3b9.appspot.com",
  messagingSenderId: "458546956551",
  appId: "1:458546956551:web:7c0e7530faadb20a8f9da2",
  measurementId: "G-60227R4F6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);