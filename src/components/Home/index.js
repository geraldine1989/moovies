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

  const Home = ({ list, dislikes, likes, deleteMovie, currentCat, currentPage, todosPerPage, changePage, pageNumbers, precendentPage, nextPage  }) => {
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
  const handelPre = () => {
    precendentPage();
  }

  const handelnext = () => {
    nextPage();
  }
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
          <Card key={movie.id} id={movie.id} className="cards">
            <div className="cards-picture">
              <Button onClick={handleDelete(movie.id)} className="delete"> <Icon className="trash alternate outline" /></Button>
              <Image src={`src/components/Home/img/${movie.category}.jpg`} wrapped ui={false} />
            </div>
            <Card.Content className="cart-content">
              <Card.Header className="cart-content-title">{movie.title}</Card.Header>
              <Card.Meta className="cart-content-meta">
                <span>{movie.dislikes} <Icon className="thumbs down"/> {movie.likes} <Icon className="thumbs up" /></span>
              </Card.Meta>
            </Card.Content>
            <Card.Description className="card-description">
              {movie.category}
            </Card.Description>
            <Button.Group className="card-likes">
              <Button onClick={handleDislike(movie.id)} className={movie.checkeddislike}><Icon className="thumbs down" /></Button>
              <Button onClick={handleLike(movie.id)} className={movie.checkedlike}><Icon className="thumbs up" /></Button>
            </Button.Group>
          </Card>
        ),)
        }
      </div>
      <div id="pagination">
          <button onClick={handelPre}><Icon className="angle left"></Icon></button>
          {pageNumbers.map(number =>
            (<button 
              key={number}
              id={number}
              onClick={handleChangePage}>
              {number}
            </button>)
          )}
          <button onClick={handelnext}><Icon className="angle right"></Icon></button>
        </div>
    </div>
  );
};

Home.propTypes = {
  list: PropsTypes.array.isRequired,
  dislikes: PropsTypes.func.isRequired,
  likes: PropsTypes.func.isRequired,
  deleteMovie: PropsTypes.func.isRequired,
  currentCat: PropsTypes.string.isRequired,
  currentPage: PropsTypes.number.isRequired,
  todosPerPage: PropsTypes.number.isRequired,
  changePage: PropsTypes.func.isRequired,
  pageNumbers: PropsTypes.array.isRequired,
  nextPage: PropsTypes.func.isRequired,
  precendentPage: PropsTypes.func.isRequired,
};

export default Home;
