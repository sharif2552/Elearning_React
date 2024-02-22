
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBVlki1AElmBPcynhqlyUPM0ZmhIJig8EU",
  authDomain: "elearning-react-d5db9.firebaseapp.com",
  projectId: "elearning-react-d5db9",
  storageBucket: "elearning-react-d5db9.appspot.com",
  messagingSenderId: "363974592477",
  appId: "1:363974592477:web:75a41f2d1638c1bdbfd834",
  measurementId: "G-V88R9THHRT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
