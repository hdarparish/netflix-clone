import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import detailReducer from "./detailReducer";

const allReducers = combineReducers({
  movies: moviesReducer,
  detail: detailReducer,
});

export default allReducers;
