import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';

export const MovieCard = ({ title, poster_path, vote_average, id, getMovieById}) => {
  const imageURL = `https://image.tmdb.org/t/p/w780${poster_path}`;
  const altPoster = './img/posterplaceholder.jpg';

  return (
    <div className="card">
      <div className="card-image">
        <img
          className="img"
          src={poster_path ? imageURL : altPoster}
          alt={`${title} poster`}
          data-id={id}
          onClick={(event) => getMovieById(event.target.dataset.id)}
        />
        <div className="vote_average">
          <img
            className="star"
            src="./img/star-active.svg"
            alt="golden star icon"
          />
          <span>{vote_average}</span>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  getMovieById: PropTypes.func.isRequired,
};
