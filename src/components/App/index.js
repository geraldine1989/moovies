/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Example from 'src/containers/Example';
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Footer from 'src/containers/Footer';
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
    <Home />
    <Footer />
  </div>
);

/**
 * Export
 */
export default App;
