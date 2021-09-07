const initialState = {
  actionMovies: [],
  animationMovies: [],
  horrorMovies: [],
  romanceMovies: [],
  tvMovies: [],
  popularTv: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        actionMovies: action.payload.actionMovies,
        animationMovies: action.payload.animationMovies,
        horrorMovies: action.payload.horrorMovies,
        romanceMovies: action.payload.romanceMovies,
        tvMovies: action.payload.tvMovies,
        popularTv: action.payload.popularTv,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
