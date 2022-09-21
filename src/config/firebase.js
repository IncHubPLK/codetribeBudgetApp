// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxhiktM2jD8y1utrXpnJrn9lF8br2eI_E",
  authDomain: "budget-app-90a27.firebaseapp.com",
  projectId: "budget-app-90a27",
  storageBucket: "budget-app-90a27.appspot.com",
  messagingSenderId: "522156967743",
  appId: "1:522156967743:web:fafb425cc943ad8efb358a",
  measurementId: "G-QE39WQC3PY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth  = getAuth(app);

const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth, db};