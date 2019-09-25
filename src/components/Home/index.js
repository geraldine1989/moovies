/**
 * Npm import
 */

import React from 'react';
import PropsTypes from 'prop-types';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

/**
 * Local import
 */
import './index.scss';

const Home = ({ list, dislikes, likes, deleteMovie, currentCat, currentPage, todosPerPage, changePage, pageNumbers  }) => {
  const handleDislike = id => () => {
    dislikes(id);
  };
  const handleLike = id => () => {
    likes(id);
  };

  const handleDelete = id => () => {
    deleteMovie(id);
  };
  
  const handleChangePage = (e) => {
    const newView = e.target.id;
    changePage(newView);
  }
 // const filterCat = (currentCat !== 'all' ? list.filter(movie => movie.category == currentCat) : list);

  // pagination
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  
  // Filter per category
  const filterCat = (currentCat !== 'all' ? list.filter(movie => movie.category == currentCat) : list);
  const currentTodos = filterCat.slice(indexOfFirstTodo, indexOfLastTodo);
  return (
    <div id="home">
      <div id="movies">
        {currentTodos.map(movie => (
          <Card key={movie.id} id={movie.id}>
            <Button onClick={handleDelete(movie.id)}> <Icon className="trash alternate outline"></Icon></Button>
          {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
            <Card.Content>
              <Card.Header>{movie.title}</Card.Header>
            </Card.Content>
            <Card.Meta>
              <span>{movie.dislikes}<Icon className="thumbs down"></Icon> {movie.likes}<Icon className="thumbs up"></Icon></span>
            </Card.Meta>
            <Card.Content extra>
              <Button.Group>
                <Button onClick={handleDislike(movie.id)} ><Icon className="thumbs down"></Icon></Button>
                <Button onClick={handleLike(movie.id)}><Icon className="thumbs up"></Icon></Button>
              </Button.Group>
            </Card.Content>
          </Card>
        )
        )}
      </div>
      <div id="pagination">
        {pageNumbers.map(number =>
          (<button 
            key={number}
            id={number}
            onClick={handleChangePage}>
            {number}
          </button>)
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  list: PropsTypes.array.isRequired,
  dislikes: PropsTypes.func.isRequired,
  likes: PropsTypes.func.isRequired,
  deleteMovie: PropsTypes.func.isRequired,
};

export default Home;
