import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIRgUQkDYsQHyl2aIyDpyovG4PFeUA1bQ",
    authDomain: "authentication-productio-b98fa.firebaseapp.com",
    projectId: "authentication-productio-b98fa",
    storageBucket: "authentication-productio-b98fa.appspot.com",
    messagingSenderId: "873958941742",
    appId: "1:873958941742:web:46ab273252a4bb641a2bbf"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app
