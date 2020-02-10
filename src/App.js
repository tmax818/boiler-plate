import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <h1>Tyler's React Boiler Plate</h1>
        <h2>Day One</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.tylermaxwell.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Tyler
        </a>
      </header>
    </div>
  );
}

export default App;
