/**
 * Npm import
 */

import React from 'react';
import PropsTypes from 'prop-types';
import Pagination from "react-js-pagination";
//import { Pagination } from 'semantic-ui-react'

/**
 * Local import
 */
import './index.scss';

const Footer = ({activePage, pageChange}) => {
  const handlePageChange = (pageNumber) => {
    console.log('je suis dans pagination' + pageNumber);
    pageChange(pageNumber);
  }
  const handlepageselect = (e) => {
    console.log(e.target.options[e.target.selectedIndex].value);
  }
  return (
    <div id="Footer">
     <Pagination
            activePage={activePage}
            itemsCountPerPage={3}
            totalItemsCount={4}
            pageRangeDisplayed={6}
            onChange={handlePageChange }
          /> 
          <select
          onClick={handlepageselect}
        >
          <option value="10">Element by page</option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
        {/* <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={10}
      /> */} 
    </div>
   
  );
} 

Footer.propTypes = {
};

export default Footer;
