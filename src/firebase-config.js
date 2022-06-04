// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQw4eNAcf1s8ABqlnBmm4kTz1yiyuILJk",
  authDomain: "train-schedule-9c35b.firebaseapp.com",
  projectId: "train-schedule-9c35b",
  storageBucket: "train-schedule-9c35b.appspot.com",
  messagingSenderId: "722181330506",
  appId: "1:722181330506:web:cc086ce48489e5f90978b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);