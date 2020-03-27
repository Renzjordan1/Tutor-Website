import authReducer from "./authReducer";
import userDetailsReducer from "./userDetailsReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  userDetails: userDetailsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
