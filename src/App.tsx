import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HelloThere from "./components/HelloThere";
import AboutMe from "./components/AboutMe";
import axios from "axios";

function App() {
/*
    const [message, setMessage] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<string>(
                    "http://localhost:8080/start/hello"
                );
                setMessage(response.data);
            } catch (err) {

            }
        };

        fetchData();
    }, []);
*/


  return (
    <div className="App">
      <Header />
      <div className="App-body">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>
         Hello, welcome to my world!
        </h1>
          <HelloThere />
          <AboutMe/>

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
