import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD9gXxZKaaP-I7bDEJ1-jtL2fZmuoTSFtY",
  authDomain: "gallery-app-f4ac9.firebaseapp.com",
  projectId: "gallery-app-f4ac9",
  storageBucket: "gallery-app-f4ac9.appspot.com",
  messagingSenderId: "1012818665666",
  appId: "1:1012818665666:web:f04b851e445417d0ca1b5b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
