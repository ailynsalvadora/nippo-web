// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4bpMgKnxp_Ledpiv3hs1xOHUS6wqsuxU",
  authDomain: "nippo-web.firebaseapp.com",
  projectId: "nippo-web",
  storageBucket: "nippo-web.appspot.com",
  messagingSenderId: "1074422022386",
  appId: "1:1074422022386:web:915d06c4f4f8187f62506b",
  measurementId: "G-M6645NP9QK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
