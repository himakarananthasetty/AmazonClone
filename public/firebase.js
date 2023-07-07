// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyNwPJCH9KeOuA8QCBxM_1W28ClAWuu4Y",
  authDomain: "clone-himakar.firebaseapp.com",
  projectId: "clone-himakar",
  storageBucket: "clone-himakar.appspot.com",
  messagingSenderId: "786648529880",
  appId: "1:786648529880:web:e5975925b0766d7c84d0ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app);
export const db = getFirestore(app)
