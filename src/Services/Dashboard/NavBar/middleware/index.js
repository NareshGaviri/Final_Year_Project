import {
  dataVerifySuccess,
  dataVerifyRequest,
  dataVerifyFailure,
} from "../actions/actionCreators";
import { db } from "../../../../config/fbConfig";
import SignIn from "../../../Authentication/components/Authentication/SignIn";
export const indexMiddleware = (id) => {
  return (dispatch, getState) => {
    dispatch(dataVerifyRequest());
    const { collectionData } = getState().authenticate.auth;
    console.log(collectionData);
    if(collectionData){
      if(collectionData.role==="student"){
    
      db.collection("STUDENTS")
        .where("RegNo", "==", id)
        .get()
        .then((data) => {
          data.docs.forEach((doc) => {
            let data = doc.data();
            console.log(data);
            dispatch(dataVerifySuccess(data));
          });
        })
        .catch((error) => {
          dispatch(dataVerifyFailure(error));
        });
      }else{
        return <SignIn/>
      }
      }else if(!collectionData){
        <SignIn/>
      }else {
        return alert("Logout")
      }
  };
};
    