import {combineReducers} from "redux"
import {peopleReducer} from "../../Services/Register/reducers/index"
import { firebaseReducer } from "react-redux-firebase"
import { firestoreReducer } from 'redux-firestore';
import {dataVerifyReducers} from "../../Services/Dashboard/NavBar/reducers/index"
import rootReducer from "../../Services/Authentication/reducers/index"

const reducerRoot =combineReducers({
  authenticate :rootReducer,
  firebase :firebaseReducer,
  firestore: firestoreReducer,
  people: peopleReducer,
  dataVerifyId : dataVerifyReducers
})
export default reducerRoot