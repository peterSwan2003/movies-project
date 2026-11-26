import * as actions from "./ActionType";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [action.payload, ...(state.watchlist || [])],
      };

    case actions.REMOVE_MOVIE_FROME_WATCHLIST:
      return {
        ...state,
        watchlist: (state.watchlist || []).filter(
          (movie) => movie.imdbID !== action.payload,
        ),
      };

    case actions.MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watched: (state.watched || []).filter(
          (movie) =>
            movie.imdbID !== action.payload.imdbID &&
            movie.imdbID !== action.payload,
        ),
        watchlist: [action.payload, ...(state.watchlist || [])],
      };

    case actions.ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        watchlist: (state.watchlist || []).filter(
          (movie) =>
            movie.imdbID !== action.payload.imdbID &&
            movie.imdbID !== action.payload,
        ),
        watched: [action.payload, ...(state.watched || [])],
      };

    case actions.REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: (state.watched || []).filter(
          (movie) => movie.imdbID !== action.payload,
        ),
      };

    default:
      return state;
  }
};
