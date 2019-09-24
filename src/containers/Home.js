/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Home from 'src/components/Home';


// Action Creators
import { dislikes, likes, deleteMovie } from 'src/store/reducer';

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
});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);


/**
 * Export
 */
export default HomeContainer;
