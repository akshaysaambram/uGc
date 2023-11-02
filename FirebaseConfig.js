import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpI3XGBucgJOoxFZi3pzw45b3gO2Oyggc",
  authDomain: "ugc-test-faab3.firebaseapp.com",
  projectId: "ugc-test-faab3",
  storageBucket: "ugc-test-faab3.appspot.com",
  messagingSenderId: "1023130864461",
  appId: "1:1023130864461:web:385a876ce0b4b4a52dc504",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Get Firebase Auth instance
const FIREBASE_AUTH = getAuth();

// Get Firebase Firestore instance
const FIREBASE_DB = getFirestore(firebaseApp);

export { FIREBASE_AUTH, FIREBASE_DB };
