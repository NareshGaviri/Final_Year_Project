import {
  dataRequest,
  dataSuccess,
  dataFailure,
} from "../actions/actionCreators";
import { db } from "../../../../../../config/fbConfig";
import SignIn from "../../../../../Authentication/components/Authentication/SignIn";
export const getFeesData = (id) => {
  return (dispatch, getState) => {
    const { collectionData } = getState().authenticate.auth;
    dispatch(dataRequest());
    console.log(collectionData);
    if (collectionData) {
      if (collectionData.role === "student") {
        db.collection("FEES")
          .where("RegNo", "==", id)
          .get()
          .then((data) => {
            data.docs.forEach((doc) => {
              let data = doc.data();
              console.log(data);
              dispatch(dataSuccess(data));
            });
          })
          .catch((error) => {
            dispatch(dataFailure(error));
          });
      } else {
        return <SignIn />;
      }
    } else if (!collectionData) {
      <SignIn />;
    } else {
      return alert("Logout");
    }
  };
};
