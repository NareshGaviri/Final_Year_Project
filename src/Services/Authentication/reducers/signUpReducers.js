import ACTIONS from "../actions/actionTypes"
import initialState from "./signUpState"

const signUpReducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_SIGNUP_REQUEST:
      console.log("signUp request")
      return {
        ...state,
        authSignUp: "Requesting",
        signUp:true
      }
    case ACTIONS.AUTH_SIGNUP_SUCCESS:
      console.log("SignUp success")
      return {
        ...state,
        authSignUp: "SignUp Success",
        signUp:false
      }
    case ACTIONS.AUTH_SIGNUP_FAILURE:
      return {
        ...state,
        authSignUp: action.payload,
        signUp:false
      }
    default:
      return state
  }
}
export default signUpReducers
