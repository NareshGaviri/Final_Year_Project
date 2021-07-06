import {reducers} from  "./reducers"

import { combineReducers } from "redux"

export const feesReducerData =combineReducers({
    fees : reducers
})