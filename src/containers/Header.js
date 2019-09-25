/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Header from 'src/components/Header';


// Action Creators
import { changePage, selectCat, changeItemsPerPage } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  list: state.moviesList,
  pageNumbers: state.pageNumbers,
  todosPerPage: state.todosPerPage,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  dislikes: (id) => {
    dispatch(dislikes(id));
  },
  likes: (id) => {
    dispatch(likes(id));
  },
  deleteMovie: (id) => {
    dispatch(deleteMovie(id));
  },
  changePage: (pageNumber) => {
    dispatch(changePage(pageNumber));
  },
  selectCat: (currentCat) => {
    dispatch(selectCat(currentCat));
  },
  changeItemsPerPage: (value) => {
    dispatch(changeItemsPerPage(value));
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);


/**
 * Export
 */
export default HeaderContainer;
