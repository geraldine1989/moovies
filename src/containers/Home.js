/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Home from 'src/components/Home';


// Action Creators
import { dislikes } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  message: state.message,
  clic: state.clic,
  list: state.moviesList,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  dislikes: (id) => {
    dispatch(dislikes(id));
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const HomeContainer = createContainer(Home);
*/

/**
 * Export
 */
export default HomeContainer;
