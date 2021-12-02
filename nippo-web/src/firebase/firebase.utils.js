import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyC4bpMgKnxp_Ledpiv3hs1xOHUS6wqsuxU",
    authDomain: "nippo-web.firebaseapp.com",
    projectId: "nippo-web",
    storageBucket: "nippo-web.appspot.com",
    messagingSenderId: "1074422022386",
    appId: "1:1074422022386:web:915d06c4f4f8187f62506b",
    measurementId: "G-M6645NP9QK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;