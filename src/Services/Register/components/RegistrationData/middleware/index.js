import {
  feesFirebaseRequest,
  feesFirebaseSuccess,
  feesFirebaseFailure,
} from "../actions/actionCreators";
import { db } from "../../../../../config/fbConfig";
export const feesfees = () => {
  return (dispatch, useState) => {
    dispatch(feesFirebaseRequest);

    db.collection("PAID_REGISTRATION_FEE")
      .get()
      .then((snap) => {
        console.log("snaper", snap);
        let fees = [];
        snap.docs.forEach((doc) => {
          fees.push(doc.data());
        });
        dispatch(feesFirebaseSuccess(fees));
      })

      .catch((error) => {
        console.log(error);
        dispatch(feesFirebaseFailure(error));
      });
  };
};
