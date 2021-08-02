import React, { Component } from 'react';
import { getMovieById, searchMovies } from '../../api/api';
import { MovieInfo } from '../MovieInfo/MovieInfo';
import { MoviesList } from '../MoviesList/MoviesList';
import './SearchMovie.scss';

export class SearchMovie extends Component {
  state = {
    search: '',
    movies: [],
    selectedMovie: null,
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  getMovies = () => {
    if (this.state.search) {
      searchMovies(this.state.search)
      .then(movies => this.setState({ movies: movies.results }));
    }
  }

  getMovieById = (id) => {
    getMovieById(id)
      .then(movie => this.setState({ selectedMovie: movie }));
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.getMovies()
    this.setState({search: '', selectedMovie: null});
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
        {
          this.state.movies.length
            ? <MoviesList
                movies={this.state.movies}
                getMovieById={this.getMovieById}
              />
            : <h2 className="title">No movies found, please try again</h2>
        }
        {
          this.props.selectedMovie
            ? <MovieInfo movie={this.state.selectedMovie} />
            : null
        }
      
      </>
    );
  }
}
