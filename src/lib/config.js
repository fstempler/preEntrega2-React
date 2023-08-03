// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBayA_Wj-m1Hd75KX7Ojdvg9C2Nkd7bn5A",
  authDomain: "spincity-63560.firebaseapp.com",
  projectId: "spincity-63560",
  storageBucket: "spincity-63560.appspot.com",
  messagingSenderId: "665332629305",
  appId: "1:665332629305:web:ad04fbca6c86c3e39232e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);