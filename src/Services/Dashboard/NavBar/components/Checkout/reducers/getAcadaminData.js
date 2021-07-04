import ACTIONS from "../actions/actionTypes";
import initialState from "./initialState";

export const getAcadaminData = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DATA_REQUEST:
      return {
        ...state,
        fees: true,
      };
    case ACTIONS.DATA_SUCCESS:
      return {
        ...state,
        dataFees: action.payload,
        fees: false,
      };
    case ACTIONS.DATA_FAILURE:
      return {
        ...state,
        dataFees: action.payload,
        fees: false,
      };
    default:
      return state;
  }
};
