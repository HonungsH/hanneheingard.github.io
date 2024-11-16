import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HelloThere from "./components/HelloThere";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
         Hello, welcome to the world of Honung :)
        </p>
          <HelloThere />

   {/*     <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
