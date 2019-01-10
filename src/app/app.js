import React from 'react';
import './app.css';
import logo from '../images/logo.svg';

const App = () => (
  <div className="app">
    <header className="app-header">
      <img src={logo} alt="Bastien Schaeffer"/>
      <h1 className="app-title">Webpack React boilerplate</h1>
    </header>
  </div>
);

export default App;
