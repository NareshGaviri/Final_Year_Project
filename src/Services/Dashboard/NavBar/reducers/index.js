import { reducers } from "./reducers";

import { combineReducers } from "redux";

export const dataVerifyReducers = combineReducers({
  dataVerify: reducers,
});
