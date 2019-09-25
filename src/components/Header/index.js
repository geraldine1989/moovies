/**
 * Npm import
 */

import React from 'react';
import PropsTypes from 'prop-types';


/**
 * Local import
 */
import './index.scss';
import { Icon } from 'semantic-ui-react';

const Header = ({ list, selectCat, changeItemsPerPage }) => {
  const moviecategories = list.reduce(function (newList, currentMovie) {
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
      <div id="header-title"> M<Icon className="play circle outline"/>vies</div>
      <div id="header-content">
        <div id="header-conten-cat">
          <label>Catégories</label>
          <select id="category" onChange={handleSelectCat}>
            <option value="all">All</option>
            {moviecategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ),
            )}
          </select>
        </div>
      
        <div id="header-content-select">
          <div id="header-content-select-label">
            Vues par pages
          </div>
          <div id="header-content-select-buttons">
            <button id="firstbutton" value="4" onClick={handleChangeItemsPerPage}>4</button>
            <button value="8" onClick={handleChangeItemsPerPage}>8</button>
            <button id="secondbutton" value="12" onClick={handleChangeItemsPerPage}>12</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  list: PropsTypes.array.isRequired,
  selectCat: PropsTypes.func.isRequired,
  changeItemsPerPage: PropsTypes.func.isRequired,
};

export default Header;
