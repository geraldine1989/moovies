/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Footer from 'src/components/Footer';


// Action Creators
import { pageChange } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  list: state.moviesList,
  activePage: state.activePage,
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
});

// Container
const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);


/**
 * Export
 */
export default FooterContainer;
