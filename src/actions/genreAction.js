import axios from "axios";
import { movieGenresURL } from "../api";

//action creator

export const loadMovies = () => async (dispatch) => {
  //fetch axios
  const movieGenres = await axios.get(movieGenresURL());

  dispatch({
    type: "FETCH_GENRES",
    payload: {
      genres: movieGenres.data.genres,
    },
  });
};
