import React, { Component } from 'react';
import { getMovieById, searchMovies } from '../../api/api';
import { MovieCard } from '../MovieCard';
import { MovieInfo } from '../MovieInfo/MovieInfo';
import './SearchMovie.scss';

export class SearchMovie extends Component {
  selectedMovieFromStorage = JSON.parse(localStorage.getItem('searchMovieInfo'));
  moviesFromStorage = JSON.parse(localStorage.getItem('searchMovies'));

  state = {
    search: '',
    movies: this.moviesFromStorage || [],
    selectedMovie: this.selectedMovieFromStorage || null,
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);

    if (this.state.selectedMovie) {
      localStorage.setItem('searchMovieInfo', JSON.stringify(this.state.selectedMovie))
    }
  }

  getMovies = () => {
    if (this.state.search) {
      searchMovies(this.state.search)
      .then(movies => {
        localStorage.setItem('searchMovies', JSON.stringify(movies.results))
        this.setState({ movies: movies.results })
      });
    }
  }

  getMovieById = (id) => {
    getMovieById(id)
      .then(movie => this.setState({ selectedMovie: movie }));
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.getMovies()
    this.setState({search: ''});
  }

  render() {
    return (
      <>
        <form className="search" onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.search}
            onChange={event => this.setState({search: event.target.value})}
            placeholder="Search movies"
          />
          <button
            type="submit"
            disabled={!this.state.search}
          >
            Search
          </button>
        </form>
        <div className="movies">
          {
            this.state.selectedMovie
              ? <MovieInfo movie={this.state.selectedMovie} />
              : null
          }
          {
            this.state.movies.length
              ? this.state.movies.map(movie => (
                  <MovieCard
                    key={movie.id}
                    {...movie}
                    getMovieById={this.getMovieById}
                  />
                ))
              : <h2 className="title">No movies found, please try again</h2>
          }
        </div>
      </>
    );
  }
}
