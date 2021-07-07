import {
  authRequest,
  authSuccess,
  authFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signOutRequest,
  signOutSuccess,
  signOutFaliure,
} from "../actions/actionCreators";
import firebase from "../../../config/fbConfig";
import { db } from "../../../config/fbConfig";
export const logIn = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // const firebase = getFirebase();
    // const firestore = getFirestore();
    dispatch(authRequest());
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(({ user }) => {
        db.collection("USERS")
          .doc(user.uid)
          .get()
          .then((doc) => {
            dispatch(authSuccess(doc.data()));
          });
      })
      .catch((error) => {
        console.log(error.message);

        dispatch(authFailure(error));
      });
  };
};
//signUp
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const data = {
      fName: newUser.fName,
      lName: newUser.lName,
      createdAt: new Date(),
      role: newUser.role,
      email: newUser.email,
      rollNumber: newUser.rollNumber,
    };
    dispatch(signUpRequest());
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        return firestore.collection("USERS").doc(res.user.uid).set(data);
      })
      .then(() => {
        dispatch(signUpSuccess());
      })
      .catch((error) => {
        console.log(error.message);
        console.log("SignUp failure");
        dispatch(signUpFailure(error), error);
      });
  };
};

export const _signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(signOutRequest());
    firebase
      .auth()
      .signOut()
      .then((data) => {
        console.log(data);
        dispatch(signOutSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(signOutFaliure(error));
      });
  };
};
