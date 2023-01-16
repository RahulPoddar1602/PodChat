import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBlBZeyGChcBi5YMc3T39bW3YX4GCcn2iA",
  authDomain: "chat-23127.firebaseapp.com",
  projectId: "chat-23127",
  storageBucket: "chat-23127.appspot.com",
  messagingSenderId: "133315043301",
  appId: "1:133315043301:web:f6f2665db27be14f07190c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()