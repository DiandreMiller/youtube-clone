// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_firebase_key,
    authDomain: "[youtobe-380117.firebaseapp.com](http://youtobe-380117.firebaseapp.com/)",
    projectId: "youtobe-380117",
    storageBucket: "[youtobe-380117.appspot.com](http://youtobe-380117.appspot.com/)",
    messagingSenderId: "106156474638",
    appId: "1:106156474638:web:16278924df9b92a16b575f",
    measurementId: "G-9FE21QWV9G"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
 
export default db;