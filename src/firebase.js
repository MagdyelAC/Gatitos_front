import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQR0pKI8XfKT07DxPEXef0vmDXHdGeRbc",
  authDomain: "gatitos-74a4b.firebaseapp.com",
  projectId: "gatitos-74a4b",
  storageBucket: "gatitos-74a4b.appspot.com",
  messagingSenderId: "1056784010063",
  appId: "1:1056784010063:web:45cb28a351fbf13e83d33a",
  measurementId: "G-DD8VNCTDZN"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export {
  storage, firestore as default
}