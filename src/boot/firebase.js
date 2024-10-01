import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";
import * as auth from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-1Z9XbA7JBMYBZe1umGUAadPuQi0aqQc",
  authDomain: "aula-hospitalaria.firebaseapp.com",
  projectId: "aula-hospitalaria",
  storageBucket: "aula-hospitalaria.appspot.com",
  messagingSenderId: "89792386680",
  appId: "1:89792386680:web:dd28d6a8f412181b96ff8d",
  measurementId: "G-B18PCNG4P1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore(app);

export { db, firebase, auth, firestore };
