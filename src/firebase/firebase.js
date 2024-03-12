// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIPmtbEKN4tyjjFywo65yQ1Ft1sIC_zHU",
  authDomain: "blog-4c423.firebaseapp.com",
  projectId: "blog-4c423",
  storageBucket: "blog-4c423.appspot.com",
  messagingSenderId: "551840329434",
  appId: "1:551840329434:web:931d1d38ffb0c43b357fe3",
  measurementId: "G-DHFQ7YRDB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);

