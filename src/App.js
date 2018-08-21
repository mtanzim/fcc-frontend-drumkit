import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DrumMachine from './DrumMachine';

const App = () => (
  <div className="container">
    <div className="jumbotron bg-dark text-light">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="">Welcome to Tanzim's React Drum Kit!</h2>
    </div>
    <div className="row justify-content-center">
      <DrumMachine/>
    </div>
    <div className="row footer justify-content-md-center border-top border-dark">
      <p>Developed and Designed by Tanzim Mokammel</p>
    </div>
  </div>
);

export default App;
