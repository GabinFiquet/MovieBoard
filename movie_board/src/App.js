import React, { useEffect, useState } from 'react';
import logo from './logoLBAF.svg';
import logoTMDB from './logoTMBD.svg';
import apiAxios from './apiAxios';
import Movies from './components/movies/Movies.js';
import'./App.css';

function App() {
  const [moviesdb, setMoviesdb] = useState([]);

  useEffect(() => {
        apiAxios.getData()
            .then(res => {
                setMoviesdb(res);
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, []);

  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <Movies movies={moviesdb}/>
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
