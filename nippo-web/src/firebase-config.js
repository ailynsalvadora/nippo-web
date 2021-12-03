import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "REMOVEDAPIKEY",
    authDomain: "nippo-web.firebaseapp.com",
    projectId: "nippo-web",
    storageBucket: "nippo-web.appspot.com",
    messagingSenderId: "1074422022386",
    appId: "1:1074422022386:web:915d06c4f4f8187f62506b",
    measurementId: "G-M6645NP9QK"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);