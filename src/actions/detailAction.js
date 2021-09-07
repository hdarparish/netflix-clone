import axios from "axios";
import { movieDetailURL } from "../api";

export const loadDetail = (movieId) => async (dispatch) => {
  const movieData = await axios.get(movieDetailURL(movieId));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      movieDetail: movieData.data,
    },
  });
};
