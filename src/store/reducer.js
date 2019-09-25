import movies from '../../movies';

/**
 * Initial State
 */
const initialState = {
  moviesList: movies,
  currentCat: 'all',
  currentPage: 1,
  todosPerPage: 12,
  pageNumbers: [1],
};

/**
 * Types
 */
const DISLIKE = 'DISLIKE';
const LIKE = 'LIKE';
const DELETE_MOVIE = 'DELETE_MOVIE';
const SELECT_CAT = 'SELECT_CAT';
const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_ITEMS_PER_PAGE = 'CHANGE_ITEMS-PER_PAGE';
const PRECEDENT_PAGE = 'PRECEDENT_PAGE';
const NEXT_PAGE = 'NEXT_PAGE';
/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  const { moviesList } = state;
  const { currentPage } = state;
  const { pageNumbers } =state;
  switch (action.type) {
    /** cards action */
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
    /** Select a category */
    case SELECT_CAT:
      const sectedCat = action.currentCat;
      console.log('cat selectionne ' + sectedCat);
      // recuperation of the number of movies
      const filteredMovies = moviesList.filter((movie => movie.category === sectedCat) )
      const initPage =[];

      for (let i = 1; i <= Math.ceil(filteredMovies.length / 4); i++) {
        initPage.push(i);
      }
      return {
        ...state,
        todosPerPage: 4,
        currentCat: sectedCat,
        currentPage: 1,
        pageNumbers: initPage,
      };

    /** Pagination */
    case CHANGE_PAGE:
      const newPage = parseInt(action.id);
      return {
        ...state,
        currentPage: newPage,
      };
    case CHANGE_ITEMS_PER_PAGE:
      const numberItemsChoice = action.value;
      const init =[];
      for (let i = 1; i <= Math.ceil(moviesList.length / numberItemsChoice); i++) {
        init.push(i);
      }
      return {
        ...state,
        todosPerPage: numberItemsChoice,
        pageNumbers: init,
      };
    case PRECEDENT_PAGE: 
      const actuelPage = currentPage;
      if (actuelPage > 1)  {
        return {
          ...state,
          currentPage: actuelPage - 1,
        };
      }
      return {
        ...state,
      };
    case NEXT_PAGE:
      const actuelPrePage = currentPage;
      if (actuelPrePage < pageNumbers.length)  {
        return {
          ...state,
          currentPage: actuelPrePage + 1,
        };
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */

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

export const selectCat = currentCat => ({
  type: SELECT_CAT,
  currentCat,
});

export const changePage = id => ({
  type: CHANGE_PAGE,
  id,
});

export const changeItemsPerPage = value => ({
  type: CHANGE_ITEMS_PER_PAGE,
  value,
});

export const precendentPage = () => ({
  type: PRECEDENT_PAGE,
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
