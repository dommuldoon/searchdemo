import { combineReducers } from "redux";
import postReducer from "./postReducer";
import tweetsReducer from "./tweetsReducer";

export default combineReducers({
  posts: postReducer,
  tweets: tweetsReducer
});
