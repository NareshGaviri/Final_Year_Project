import {combineReducers} from "redux"
import {peopleReducer} from "../../Services/Register/reducers/index"
import { firebaseReducer } from "react-redux-firebase"
import { firestoreReducer } from 'redux-firestore';
import rootReducer from "../../Services/Authentication/reducers/index"

const reducerRoot =combineReducers({
  authenticate :rootReducer,
  firebase :firebaseReducer,
  firestore: firestoreReducer,
  people: peopleReducer
})
export default reducerRoot