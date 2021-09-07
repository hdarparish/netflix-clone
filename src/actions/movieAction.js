import axios from "axios";
import {
  actionMoviesURL,
  animationMoviesURL,
  horrorMoviesURL,
  romanceMoviesURL,
  tvMoviesURL,
  popularTvURL,
} from "../api";

export const loadMovies = () => async (dispatch) => {
  const actionMoviesList = await axios.get(actionMoviesURL());
  const animationMoviesList = await axios.get(animationMoviesURL());
  const HorrorMoviesList = await axios.get(horrorMoviesURL());
  const romanceMoviesList = await axios.get(romanceMoviesURL());
  const tvMoviesList = await axios.get(tvMoviesURL());
  const popularTvList = await axios.get(popularTvURL());

  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      actionMovies: actionMoviesList.data.results,
      animationMovies: animationMoviesList.data.results,
      horrorMovies: HorrorMoviesList.data.results,
      romanceMovies: romanceMoviesList.data.results,
      tvMovies: tvMoviesList.data.results,
      popularTv: popularTvList.data.results,
    },
  });
};
