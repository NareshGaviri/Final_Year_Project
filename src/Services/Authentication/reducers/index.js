import {reducers } from "./signInReducers"
import {combineReducers} from "redux"
import signUpReducers from "./signUpReducers"
const rootReducer = combineReducers({
  auth :reducers,
  authSignUp :signUpReducers,
})
export default rootReducer