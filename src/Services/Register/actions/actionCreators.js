  import ACTIONS from "./actionTyes";

  export const dataFirebaseRequest = () => {
    return {
      type: ACTIONS.DATA_REQUEST,
    };
  };

  export const dataFirebaseSuccess = (payload) => {
    console.log("Actions",payload)
    return {
      type: ACTIONS.DATA_SUCCESS,
      payload,
    };
  };

  export const dataFirebaseFailure = (payload) => {
    return {
      type: ACTIONS.DATA_FAILURE,
      payload,
    };
  };
