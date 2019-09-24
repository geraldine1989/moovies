
import React from 'react';
import PropsTypes from 'prop-types';

const Example = ({ clic, message, doSomething }) => (
  <div id="app" onClick={doSomething}>
    <p>{ `${message}, vous avez cliqué sur moi ${clic} fois` }</p>
  </div>
 
);

Example.propTypes = {
  clic: PropsTypes.number.isRequired,
  message: PropsTypes.string.isRequired,
  doSomething: PropsTypes.func.isRequired,
};

export default Example;
