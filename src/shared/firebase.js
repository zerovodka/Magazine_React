import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqhhtPOImGFddAX_5aff6DKa4HLOu4WeI",
  authDomain: "authex-d42a5.firebaseapp.com",
  projectId: "authex-d42a5",
  storageBucket: "authex-d42a5.appspot.com",
  messagingSenderId: "710257102374",
  appId: "1:710257102374:web:d9f0e45b93861b029360e7",
  measurementId: "G-J4JW21MX4B",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
