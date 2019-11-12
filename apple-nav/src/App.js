import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom"


import MainNavWrapper from "./components/MainNavWrapper"
import SubNavWrapper from "./components/SubNavWrapper"

function App() {
  return (
    <div className="App">
      <MainNavWrapper />
    </div>
  );
}

export default App;
