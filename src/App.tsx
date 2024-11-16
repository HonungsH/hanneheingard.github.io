import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HelloThere from "./components/HelloThere";
import Experience from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>
         Hello, welcome to the world of Honung :)
        </h1>
          <HelloThere />
          <Experience/>

   {/*     <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </div>
    </div>
  );
}

export default App;
