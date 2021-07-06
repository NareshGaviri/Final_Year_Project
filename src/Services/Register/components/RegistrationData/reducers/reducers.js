import ACTIONS from "../actions/actionTypes";

import initialState from "./initialState";

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FEES_REQUEST:
      return {
        ...state,
      };
    case ACTIONS.FEES_SUCCESS:
      console.log("reducer", action.payload);
      return {
        ...state,
        feesData: action.payload,
      };
    case ACTIONS.FEES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
