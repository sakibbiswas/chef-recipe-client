// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('environment variable',import.meta.env.VITE_SOME_KEY)
const firebaseConfig = {
//  apiKey: "AIzaSyD0851r4PakWTWQzJo6HzDrOln0jJzpyEI",
//   authDomain: "chef-recipe-client-8ef77.firebaseapp.com",
//   projectId: "chef-recipe-client-8ef77",
//   storageBucket: "chef-recipe-client-8ef77.appspot.com",
//   messagingSenderId: "948588615347",
//   appId: "1:948588615347:web:7291cd0e1f565dbc0902c6"
    apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket ,
  messagingSenderId:import.meta.env.VITE_messagingSenderId, 
  appId:import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;