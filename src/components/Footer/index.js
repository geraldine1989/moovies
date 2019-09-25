/**
 * Npm import
 */

import React from 'react';
import PropsTypes from 'prop-types';
//import Pagination from "react-js-pagination";
import { Pagination } from 'semantic-ui-react'

/**
 * Local import
 */
import './index.scss';

const Footer = ({ page, perPage, list}) => {
  // const paginator = ( list, page, perPage) => {
  //   const offset = (page - 1) * perPage;
  //   const paginatedItems = list.slice(offset).slice(0, perPage);
  //   const totalPages = Math.ceil(list.lenght / perPage);
  //   return {
  //     perPage: perPage,
  //     prePage: page - 1 ? page - 1 : null,
  //     nextPage: (totalPages > page) ? page + 1 : null,
  //     total: list.length,
  //     totalPages: totalPages,
  //     data: paginatedItems,
  //   }
  // }
  return (
    <div id="Footer">
     
      <button>click me</button>
        
    </div>
   
  );
} 

Footer.propTypes = {
};

export default Footer;
