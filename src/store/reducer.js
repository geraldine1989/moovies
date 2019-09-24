import movies from '../../movies';

/**
 * Initial State
 */
const initialState = {
  message: 'Hello',
  clic: 0,
  moviesList: movies,
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';
const DISLIKE = 'DISLIKE';

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

export const dislikes = (id) => ({
  type: DISLIKE,
  id,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
