// * Import Dependencies
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// * Set up the config variable
const config = {
  apiKey: "AIzaSyDWNYYJyAwc8pJgbOnsxcX2jjeZTc4Ym5o",
  authDomain: "crown-db-e3284.firebaseapp.com",
  databaseURL: "https://crown-db-e3284.firebaseio.com",
  projectId: "crown-db-e3284",
  storageBucket: "crown-db-e3284.appspot.com",
  messagingSenderId: "701768614261",
  appId: "1:701768614261:web:f7d138cd74f95468f2933c",
  measurementId: "G-2LKQY0XJC5"
};

// * Initialize the app
firebase.initializeApp(config);

// * Export the utils for future use
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// * Set up google auth
const provider = new firebase.auth.GoogleAuthProvider();
// * Set custom @params
provider.setCustomParameters({
  prompt: "select_account"
});

// * Export the sign in method
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// * export the default
export default firebase;
