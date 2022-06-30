import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0XMPVfX8wcFBcvA1Sv8_a6-mCBNlTc8w",
  authDomain: "todo-list-52db1.firebaseapp.com",
  projectId: "todo-list-52db1",
  storageBucket: "todo-list-52db1.appspot.com",
  messagingSenderId: "1030019125063",
  appId: "1:1030019125063:web:b7b6d7e0e53fee3111c662",
  measurementId: "G-EREJD679LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth
