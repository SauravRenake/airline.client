import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import axios, { AxiosResponse } from 'axios';
import { urlWeather } from './api/endpoints';

function App() {

  useEffect(() => {
    axios.get(urlWeather)
    .then((response: AxiosResponse<any>) =>{
      console.log(response.data);
    })
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
