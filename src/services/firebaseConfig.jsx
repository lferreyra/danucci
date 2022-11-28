import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuViFeh5DAK4Gs4wemP-Y1Ry8hwl8Pt20",
  authDomain: "danucci-81df5.firebaseapp.com",
  projectId: "danucci-81df5",
  storageBucket: "danucci-81df5.appspot.com",
  messagingSenderId: "308968884378",
  appId: "1:308968884378:web:e8c1e696caac86fb91b723"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//export const collectionProd = collection (db, 'productos')