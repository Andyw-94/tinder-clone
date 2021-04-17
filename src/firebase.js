import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuc7L06PZ0J9odlMQx8dk6Vd0NQ3kfhik",
  authDomain: "tinder-clone-e5c89.firebaseapp.com",
  projectId: "tinder-clone-e5c89",
  storageBucket: "tinder-clone-e5c89.appspot.com",
  messagingSenderId: "966939948467",
  appId: "1:966939948467:web:9f5b1f80f10b67ab8647c6",
  measurementId: "G-HWP5P3QD3E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;