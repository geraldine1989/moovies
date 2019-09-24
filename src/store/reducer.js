import movies from '../../movies';

/**
 * Initial State
 */
const initialState = {
  moviesList: movies,
  activePage: 1,
  currentCat: 'all',
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';
const DISLIKE = 'DISLIKE';
const LIKE = 'LIKE';
const DELETE_MOVIE = 'DELETE_MOVIE';
const PAGE_CHANGE = 'PAGE_CHANGE';
const SELECT_CAT = 'SELECT_CAT';
/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  const { moviesList } = state;
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        clic: state.clic + 1,
      };
    case DISLIKE:
      let newMoviesList = moviesList.map((movie) => {
        // if dislike is unactive
        if(movie.id === action.id) {
          if (movie.checked !== 'checked') {
            movie.dislikes++;
          return {
            ...movie,
            checked: 'checked',
          };
        // if dislike is alreadey active
        } else {
          movie.dislikes --;
          return {
            ...movie,
          checked: '',
        };
        }     
      }
      return movie;
    });
    return {
      ...state,
      moviesList: newMoviesList,
    };
    case LIKE:
      let newMoviesListByLiking = moviesList.map((movie) => {
        // if like is unactive
        if (movie.id === action.id) {
          if (movie.checked !== 'checked') {
            movie.likes++;
          return {
            ...movie,
            checked: 'checked',
          };
        // if like is alreadey active
        } else {
          movie.likes --;
          return {
            ...movie,
          checked: '',
        };
        }     
      }
      return movie;
    });
    return {
      ...state,
      moviesList: newMoviesListByLiking,
    };
    case DELETE_MOVIE:
      const deleteMovie = moviesList.filter(movie => movie.id !== action.id);
      return {
        ...state,
        moviesList: deleteMovie,
      };
    case PAGE_CHANGE:
    return {
      ...state,
      activePage: action.pageNumber,
    }
    case SELECT_CAT:
    return {
      ...state,
      currentCat: action.currentCat,

    }
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const doSomething = () => ({
  type: DO_SOMETHING,
});

export const dislikes = id => ({
  type: DISLIKE,
  id,
});

export const likes = id => ({
  type: LIKE,
  id,
});

export const deleteMovie = id => ({
  type: DELETE_MOVIE,
  id,
});
export const pageChange = pageNumber => ({
  type: PAGE_CHANGE,
  pageNumber,
});
export const selectCat = currentCat => ({
  type: SELECT_CAT,
  currentCat,
})
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
