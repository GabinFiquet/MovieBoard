import React from 'react';
import logo from './logo.svg';
import logoTMDB from './logoTMBD.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      
      <footer className="footer">
        <div>
          <img src={logoTMDB} alt='logo TMBD'/>
          <p>Copyright © 2010-2020 Gabin Fiquet All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
