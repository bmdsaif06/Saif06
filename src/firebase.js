// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZnnvahHU6nNuy60wx9qOJoNfEq4mDck8",
  authDomain: "id-project-fba99.firebaseapp.com",
  projectId: "id-project-fba99",
  storageBucket: "id-project-fba99.appspot.com",
  messagingSenderId: "728105070463",
  appId: "1:728105070463:web:e83a8ac618d165c9c0b44a",
  measurementId: "G-EW6072D9SY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);