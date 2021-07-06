import ACTIONS from "./actionTypes";

export const feesFirebaseRequest = () => {
  return {
    type: ACTIONS.FEES_REQUEST,
  };
};

export const feesFirebaseSuccess = (payload) => {
  console.log("Actions",payload)
  return {
    type: ACTIONS.FEES_SUCCESS,
    payload,
  };
};

export const feesFirebaseFailure = (payload) => {
  return {
    type: ACTIONS.FEES_FAILURE,
    payload,
  };
};
