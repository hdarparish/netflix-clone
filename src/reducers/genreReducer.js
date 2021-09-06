const initialState = {
  genres: [],
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GENRES":
      return {
        ...state,
        genres: action.payload.genres,
      };
    default:
      return { ...state };
  }
};

export default genreReducer;
