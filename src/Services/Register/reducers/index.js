import {reducers} from  "./reducers"

import { combineReducers } from "redux"

export const peopleReducer =combineReducers({
    people : reducers
})