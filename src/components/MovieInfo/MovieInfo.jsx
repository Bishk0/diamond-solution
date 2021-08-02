import React from 'react';
import { movieInfo } from '../../types/types';
import './MovieInfo.scss';

export const MovieInfo = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w780${movie.poster_path}`;
  const altPoster = './img/posterplaceholder.jpg';
  const genres = movie.genres.map(genre => genre.name).join(', ');
  
  return (
    <div className="info-container">
      <img 
        className="img"
        src={movie.poster_path ? imageURL : altPoster}
          alt={`${movie.title} poster`} />
      <div className="text">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p><b>Genres:</b> {genres}</p>
        <p>
          <b>Country: </b>
          {
            movie.production_countries[0]
              ? movie.production_countries[0].name
              : 'No information'
          }
        </p>
        <p>
          <b>Language: </b>
          {
            movie.spoken_languages[0]
              ? movie.spoken_languages[0].name
              : 'No information'
          }
        </p>
        <p><b>Runtime:</b> {movie.runtime} minutes</p>
        <p><b>Release date:</b> {movie.release_date}</p>
        <p><b>Budget:</b> {movie.budget}$</p>
        <p><b>Revenue:</b> {movie.revenue}$</p>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movie: movieInfo,
};
