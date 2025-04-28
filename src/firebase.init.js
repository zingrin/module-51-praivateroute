// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOpfdSZn0Phfa6C78QEkrI2FdvCuc9f_4",
  authDomain: "auth-integration-95eea.firebaseapp.com",
  projectId: "auth-integration-95eea",
  storageBucket: "auth-integration-95eea.appspot.com", // ✅ fixed here
  messagingSenderId: "83418674699",
  appId: "1:83418674699:web:eee3ed2f00745e77e3790e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);
