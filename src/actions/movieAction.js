import axios from "axios";
import {
  actionMoviesURL,
  animationMoviesURL,
  horrorMoviesURL,
  romanceMoviesURL,
  tvMoviesURL,
  historyMoviesURL,
} from "../api";

export const loadMovies = () => async (dispatch) => {
  const actionMoviesList = await axios.get(actionMoviesURL());
  const animationMoviesList = await axios.get(animationMoviesURL());
  const horrorMoviesList = await axios.get(horrorMoviesURL());
  const romanceMoviesList = await axios.get(romanceMoviesURL());
  const tvMoviesList = await axios.get(tvMoviesURL());
  const historyMoviesList = await axios.get(historyMoviesURL());

  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      actionMovies: actionMoviesList.data.results,
      animationMovies: animationMoviesList.data.results,
      horrorMovies: horrorMoviesList.data.results,
      romanceMovies: romanceMoviesList.data.results,
      tvMovies: tvMoviesList.data.results,
      historyMovies: historyMoviesList.data.results,
    },
  });
};
