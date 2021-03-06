import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      movies: [],
    }
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const movies = await movieAPI.getMovies();
      this.setState(() => ({
        loading: false,
        movies,
      }));
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (!loading) {
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      );
    }
    return <Loading />;
  }
}

export default MovieList;
