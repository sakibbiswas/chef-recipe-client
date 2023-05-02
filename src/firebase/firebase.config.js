// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0851r4PakWTWQzJo6HzDrOln0jJzpyEI",
  authDomain: "chef-recipe-client-8ef77.firebaseapp.com",
  projectId: "chef-recipe-client-8ef77",
  storageBucket: "chef-recipe-client-8ef77.appspot.com",
  messagingSenderId: "948588615347",
  appId: "1:948588615347:web:7291cd0e1f565dbc0902c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;