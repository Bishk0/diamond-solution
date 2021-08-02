import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { moviesTypes } from '../../types/types';
import { MovieInfo } from '../MovieInfo/MovieInfo';
import { getMovieById } from '../../api/api';

export class MoviesList extends Component {

  state = {
    selectedMovie: null,
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  getMovieById = (id) => {
    getMovieById(id)
      .then(movie => this.setState({ selectedMovie: movie }));
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="movies">
        {
          this.state.selectedMovie
            ? <MovieInfo movie={this.state.selectedMovie} />
            : null
        }
        {movies.map(movie => (
            <MovieCard
              key={movie.id}
              {...movie}
              getMovieById={this.getMovieById}
            />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(moviesTypes),
};
