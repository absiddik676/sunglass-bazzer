// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwwqsmPJm3d3i75Gxpn5IFOIN3RzDF828",
  authDomain: "sunglass-buzzer.firebaseapp.com",
  projectId: "sunglass-buzzer",
  storageBucket: "sunglass-buzzer.appspot.com",
  messagingSenderId: "690788842956",
  appId: "1:690788842956:web:5addfbe5c5cd3d2a4cf169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app