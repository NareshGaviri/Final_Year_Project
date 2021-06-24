import {
  dataFirebaseRequest,
  dataFirebaseSuccess,
  dataFirebaseFailure,
} from "../actions/actionCreators";

export const createPeople = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    dispatch(dataFirebaseRequest());
    firestore
      .collection("STUDENTS")
      .get()
      .then((snap) => {
        console.log("snap", snap);
        let Data = [];

        snap.docs.forEach((doc) => {
          Data.push(doc.data());
        });
        dispatch(dataFirebaseSuccess(Data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(dataFirebaseFailure(error));
      });
  };
};
