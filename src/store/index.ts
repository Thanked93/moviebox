import { combineReducers } from "redux";
import { movieReducer } from "./movie/movieReducer";
import { accountReducer } from "./account/accountReducer";

export default combineReducers({
  accountReducer,
  movieReducer,
});
