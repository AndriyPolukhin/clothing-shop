import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("iifzal1uAFzVyoBmv1kV")
  .collection("cartItems")
  .doc("UXcnSHizM9TWIjNyP6yK");

firestore.doc("/users/iifzal1uAFzVyoBmv1kV/cartItems/UXcnSHizM9TWIjNyP6yK");
firestore.collection("/users/iifzal1uAFzVyoBmv1kV/cartItems/");
