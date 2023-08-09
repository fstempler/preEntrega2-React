
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FBS_API_KEY,
  authDomain: import.meta.env.VITE_FBS_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FBS_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FBS_BUCKET,
  messagingSenderId: import.meta.env.VITE_FBS_SENDER_ID,
  appId: import.meta.env.VITE_FBS_APP_ID,
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);