import { combineReducers } from "redux";

import data from "./data";
import tweets from "./tweets";

export default combineReducers({
  data,
  tweets
});
