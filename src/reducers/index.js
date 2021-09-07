import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

const allReducers = combineReducers({
  movies: moviesReducer,
});

export default allReducers;
