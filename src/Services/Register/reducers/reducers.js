import ACTIONS from "../actions/actionTyes";

import initialState from "./initialState";

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DATA_REQUEST:
      return {
        ...state,
      };
    case ACTIONS.DATA_SUCCESS:
      console.log("reducer",action.payload)
      return {
        ...state,
        peopleData: action.payload,
      }
    case ACTIONS.DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
