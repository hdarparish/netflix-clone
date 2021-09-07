//Base url
const baseUrl = "https://api.themoviedb.org/3/";
//API key
const apiKey = `?api_key=${process.env.REACT_APP_API_KEY}`;

export const movieGenresURL = () => `${baseUrl}genre/movie/list${apiKey}`;

/* export const getMoviesURL = (genreId) =>
  `${baseUrl}discover/movie${apiKey}&with_genres=${genreId}`; */

//get action movies
export const actionMoviesURL = () =>
  `${baseUrl}discover/movie${apiKey}&with_genres=28`;

//get animation movies
export const animationMoviesURL = () =>
  `${baseUrl}discover/movie${apiKey}&with_genres=16`;

//get horror movies
export const horrorMoviesURL = () =>
  `${baseUrl}discover/movie${apiKey}&with_genres=27`;

//get romance movies
export const romanceMoviesURL = () =>
  `${baseUrl}discover/movie${apiKey}&with_genres=10749`;

//get tv movies
export const tvMoviesURL = () =>
  `${baseUrl}discover/movie${apiKey}&with_genres=10770`;

//get action movies
export const popularTvURL = () =>
  `${baseUrl}tv/popular${apiKey}&language=en-US&page=1`;
