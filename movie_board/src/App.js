import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import apiAxios from './apiAxios';

import Movies from './components/movies/Movies.js';

import'./App.css';

import logo from './logoLBAF.svg';
import logoTMDB from './logoTMBD.svg';
import PageMovie from './components/PageMovie/PageMovie';

function App() {
  const [moviesdb, setMoviesdb] = useState([]);

  useEffect(() => {
        apiAxios.getData()
            .then(res => {
                setMoviesdb(res);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <img src={logo} alt="logo" />
        </header>
        <Switch>
            <Route exact path="/">
              <Movies movies={moviesdb}/>
            </Route>
            <Route path="/movie/:movieID">
              <PageMovie/>
            </Route>
          </Switch>
        <footer className="footer">
          <div>
            <img src={logoTMDB} alt='logo TMBD'/>
            <p>Copyright © 2010-2020 Gabin Fiquet All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
