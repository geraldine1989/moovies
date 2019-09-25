/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';

import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
    <Home />
  </div>
);

/**
 * Export
 */
export default App;
