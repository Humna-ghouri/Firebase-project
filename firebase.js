import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCtulJ9m1ipfy900f6KpHdMNWTw802KxrE",
  authDomain: "form-validation-bc314.firebaseapp.com",
  projectId: "form-validation-bc314",
  storageBucket: "form-validation-bc314.appspot.com",
  messagingSenderId: "312529142492",
  appId: "1:312529142492:web:500aa6e38c52851467ea19",
  measurementId: "G-3CW57Q1WL8"
};

const app = initializeApp(firebaseConfig);

export {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword}