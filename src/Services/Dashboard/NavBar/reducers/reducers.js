import ACTIONS from "../actions/actionTypes";

import initialState from "./initialState";

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DATA_VERIFY_REQUEST:
      return {
        ...state,
        loading: "Requesting",
      };
    case ACTIONS.DATA_VERIFY_SUCCESS:
      return {
        ...state,
        dataVerify: action.payload,
      };
    case ACTIONS.DATA_VERIFY_FAILURE:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
