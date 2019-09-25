/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Header from 'src/components/Header';


// Action Creators
import { pageChange, selectCat } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  list: state.moviesList,
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
  pageChange: (pageNumber) => {
    dispatch(pageChange(pageNumber));
  },
  selectCat: (currentCat) => {
    dispatch(selectCat(currentCat));
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
