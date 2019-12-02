import React from 'react';

import './App.css';
import NavBar from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import Main from './components/main/Main.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <Main />
     
    </div>
  );
}

export default App;
