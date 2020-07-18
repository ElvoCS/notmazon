import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDMHsnSDRpeMlrDet8F8GTzbz1R465hroo",
  authDomain: "notmazon.firebaseapp.com",
  databaseURL: "https://notmazon.firebaseio.com",
  projectId: "notmazon",
  storageBucket: "notmazon.appspot.com",
  messagingSenderId: "644927953963",
  appId: "1:644927953963:web:c77e69c4bd77e22568de6e",
  measurementId: "G-72CQ1679ZB",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
