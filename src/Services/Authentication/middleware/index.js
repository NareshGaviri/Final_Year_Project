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

export const logIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(authRequest());
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch(authSuccess());
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
      isAdmin : false
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
      .then(() => {
        dispatch(signOutSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(signOutFaliure(error));
      });
  };
};
