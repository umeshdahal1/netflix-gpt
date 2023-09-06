// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHxvd7QYNkGwJIb-Swch_08alRnvSrTy0",
  authDomain: "netflixgpt-d3dd6.firebaseapp.com",
  projectId: "netflixgpt-d3dd6",
  storageBucket: "netflixgpt-d3dd6.appspot.com",
  messagingSenderId: "439975831772",
  appId: "1:439975831772:web:a20fbdfd70309828e3ec19",
  measurementId: "G-G333H2CQ52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);