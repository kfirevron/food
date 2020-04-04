import { combineReducers } from "redux";

import resultReducer from "./resultReducer.js";

export default combineReducers({
  results: resultReducer,
});
