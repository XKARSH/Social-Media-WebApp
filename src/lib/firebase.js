import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB7Qg7Xwc9sCEUPdE6oc_R1QduptyNfQmY",
  authDomain: "instagram-3b0e0.firebaseapp.com",
  projectId: "instagram-3b0e0",
  storageBucket: "instagram-3b0e0.appspot.com",
  messagingSenderId: "102455913245",
  appId: "1:102455913245:web:2082c78ba2d5cd3396cff4",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
