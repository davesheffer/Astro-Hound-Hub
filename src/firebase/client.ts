import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUl14lTH6k0n_u6-CG-mvay9DUkoiW2Yc",
  authDomain: "hound-hub.firebaseapp.com",
  projectId: "hound-hub",
  storageBucket: "hound-hub.appspot.com",
  messagingSenderId: "",
  appId: "1:846272140953:web:2157fe8e67498d351f8a08"
};

export const app = initializeApp(firebaseConfig, 'rapid');