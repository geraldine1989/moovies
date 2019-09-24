/**
 * Npm import
 */

import React from 'react';
import PropsTypes from 'prop-types';


/**
 * Local import
 */
import './index.scss';

const Header = ({ list, selectCat}) => {
  const moviecategories = list.reduce(function(newList, currentMovie) {
    if(newList.indexOf(currentMovie.category) === -1) {
      newList.push(currentMovie.category);
    } 
    return newList;
   }, []);
  
  const handleSelectCat = (e) => {
    const catValue = e.target.value;
    selectCat(catValue);
  };
  return (
    <div id="header">
      <select id="category" onChange={handleSelectCat}>
        <option value="all">Category</option>
        {moviecategories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        )
        )}
        
      </select>
    </div>
  );
};

Header.propTypes = {
};

export default Header;
