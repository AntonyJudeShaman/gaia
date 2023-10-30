import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBvev-zGL7Z65l0i1qKFAuZJtxl0mqh0Eo",
  authDomain: "gaiageos-8f3a4.firebaseapp.com",
  projectId: "gaiageos-8f3a4",
  storageBucket: "gaiageos-8f3a4.appspot.com",
  messagingSenderId: "1015257150272",
  appId: "1:1015257150272:web:e21756b1db4c244ab300a5",
  measurementId: "G-H5DGM40218"
};
  
  export const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);