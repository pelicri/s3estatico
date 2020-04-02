import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cristiano Pelizzari de Andrade.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/cristianopelizzari/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
