import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2fYQoDwEfnZHFX06UsvQBGsnryugIrpo",
  authDomain: "house-marketplace-app-7f017.firebaseapp.com",
  projectId: "house-marketplace-app-7f017",
  storageBucket: "house-marketplace-app-7f017.appspot.com",
  messagingSenderId: "332586390742",
  appId: "1:332586390742:web:91586201d31e83d4dda577",
  measurementId: "G-9ZJEHTJNPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()