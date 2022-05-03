import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACOwtmAfIJlbEYpWnq2Jj6EWu8L_W1PTk",
  authDomain: "ecommerce-f29d5.firebaseapp.com",
  projectId: "ecommerce-f29d5",
  storageBucket: "ecommerce-f29d5.appspot.com",
  messagingSenderId: "398587382000",
  appId: "1:398587382000:web:5b0284a4886efa56451a35",
  measurementId: "G-H5SN77PLDW",
};

let firebaseApp = initializeApp(firebaseConfig);
let db = getFirestore(firebaseApp);
let auth = getAuth(firebaseApp);
export { db, auth };
