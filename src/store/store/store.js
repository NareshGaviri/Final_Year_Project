import rootReducer from "../reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { composeWithDevTools } from "redux-devtools-extension";
import { reduxFirestore, getFirestore } from "redux-firestore";
import fbConfig from "../../config/fbConfig";

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
      reactReduxFirebase(fbConfig, {
        attachAuthIsReady: true,
      }),
      reduxFirestore(fbConfig)
    )
  )
);
