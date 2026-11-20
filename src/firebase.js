import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyc69BHlHQlXt9lvO1BwRDG7npnccCrg_tY",
  authDomain: "cms-psht-kosambi.firebaseapp.com",
  projectId: "cms-psht-kosambi",
  storageBucket: "cms-psht-kosambi.firebasestorage.app",
  messagingSenderId: "325392543074",
  appId: "1:325392543074:web:95afb5510d94dd5673103b",
  measurementId: "G-3HSWHND1HQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);