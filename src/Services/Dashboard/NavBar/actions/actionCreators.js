import ACTIONS from "./actionTypes";

export const dataVerifyRequest = () => {
  return {
    type: ACTIONS.DATA_VERIFY_REQUEST,
  };
};

export const dataVerifySuccess = (payload) => {
  return {
    type: ACTIONS.DATA_VERIFY_SUCCESS,
    payload,
  };
};

export const dataVerifyFailure = (payload) => {
  return {
    type: ACTIONS.DATA_VERIFY_FAILURE,
    payload,
  };
};
