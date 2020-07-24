// * Hook (use-auth.js)
import React, { useState, useEffect, useContext, createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

// * Add your Firebase Credentials
// * Set up the config variable
const config = {
  apiKey: "AIzaSyDWNYYJyAwc8pJgbOnsxcX2jjeZTc4Ym5o",
  authDomain: "crown-db-e3284.firebaseapp.com",
  databaseURL: "https://crown-db-e3284.firebaseio.com",
  projectId: "crown-db-e3284",
  storageBucket: "crown-db-e3284.appspot.com",
  messagingSenderId: "701768614261",
  appId: "1:701768614261:web:f7d138cd74f95468f2933c",
  measurementId: "G-2LKQY0XJC5",
};
firebase.initializeApp(config);

const authContext = createContext();

// * Provider component that wraps your app and makes auth object...
// * available to any child component that calls useAuth().

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

// * Hook for child components to get the auth object...
// * and re-render when it changes.

export const useAuth = () => {
  return useContext(authContext);
};

// * Provider hook that creates auth object and handles state
const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  // * Wrap any Firebase methods we want to use making sure ...
  // * to save the user to state.
  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWIthEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .singOut()
      .then(() => {
        setUser(false);
      });
  };

  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  // * Subscribe to user on mount
  // * Because this sets state in the callback it will cause any ...
  // * component that utilizes this hook to re-render with the ...
  // * latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // * Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // * Return the user Object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
};
