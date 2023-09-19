import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "hound-hub.firebaseapp.com",
  projectId: "hound-hub",
  storageBucket: "hound-hub.appspot.com",
  messagingSenderId: "846272140953",
  appId: import.meta.env.FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig, 'hound-hub');