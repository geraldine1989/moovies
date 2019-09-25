/**
 * Npm import
 */

import React from 'react';
import PropsTypes from 'prop-types';


/**
 * Local import
 */
import './index.scss';

const Header = ({ list, selectCat, changeItemsPerPage}) => {
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

  const handleChangeItemsPerPage = (e) => {
    const numberOfItems = e.target.value;
    changeItemsPerPage(numberOfItems);
  };
  return (
    <div id="header">
      <select id="category" onChange={handleSelectCat}>
        <option value="all">All</option>
        {moviecategories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        )
        )}
      </select>

      <button value="4" onClick={handleChangeItemsPerPage}>4</button>
      <button value="8" onClick={handleChangeItemsPerPage}>8</button>
      <button value="12" onClick={handleChangeItemsPerPage}>12</button>
      
    </div>
  );
};

Header.propTypes = {
};

export default Header;
