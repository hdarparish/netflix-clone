import { combineReducers } from "redux";
import genreReducer from "./genreReducer";

const allReducers = combineReducers({
  genres: genreReducer,
});

export default allReducers;
