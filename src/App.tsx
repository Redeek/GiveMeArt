import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import Logo from './components/Logo';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <ProgressBar />
    </div>
  );
}

export default App;
