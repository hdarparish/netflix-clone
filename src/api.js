//Base url
const baseUrl = "https://api.themoviedb.org/3/";
//API key
const apiKey = `?api_key=${process.env.REACT_APP_API_KEY}`;

export const movieGenresURL = () => `${baseUrl}genre/movie/list${apiKey}`;
