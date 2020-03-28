import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Error from './pages/Error';
import PokemonPage from './pages/PokemonPage'

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
    <Switch>
    <Route exact path="/pokedex" component={Pokedex}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/pokedex/:item.Name" component={PokemonPage}/>
    <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
