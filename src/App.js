import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieDetails, MovieList, NewMovie, NotFound, EditMovie } from './pages/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
