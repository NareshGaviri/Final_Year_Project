import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAo7k6WjF4-8ZgO573WjdyL0q8l7hMAtc0",
  authDomain: "registration-5da27.firebaseapp.com",
  databaseURL: "https://registration-5da27-default-rtdb.firebaseio.com",
  projectId: "registration-5da27",
  storageBucket: "registration-5da27.appspot.com",
  messagingSenderId: "1089964551694",
  appId: "1:1089964551694:web:b85dfb7501737fe7dc565f",
};
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export const auth = firebase.auth();

export const db = firebase.firestore();

export default firebase;
