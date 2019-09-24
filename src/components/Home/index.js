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

const Home = ({list, dislikes}) => {
  const handleDislike = (id) => () => {
    console.log('je suis checké');
    console.log(id);
    dislikes(id);
  };
  return (
    <div id="home">
      {list.map(movie => 
      
      <Card key={movie.id} id={movie.id}>
        <Button> <Icon className="trash alternate outline"></Icon></Button>
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
         
            <Button><Icon className="thumbs up"></Icon></Button>
          </Button.Group>
        </Card.Content>
      </Card>)}

    </div>
  );
} 

Home.propTypes = {
};

export default Home;
