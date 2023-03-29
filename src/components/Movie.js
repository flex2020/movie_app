import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  const { title,year, summary, poster, genres } = props;
  return (
    <div className='movie'>
      <Link to='/movie-detail' state={props}>
      <img src={poster} />
      <div className='movie__data'>
        <h3 className='movie__title'>{title}</h3>
        <h5 className='movie__year'>{year}</h5>
        <p className='movie_summary'>{summary.slice(0, 180)}...</p>
        <ul className='movie__genres'>
          {genres.map((genre, index) => {
            return (
              <li key={index} className='movie_genre'>{genre}</li>
            );
          })}
        </ul>
      </div>
      </Link>
    </div>
    
  );
};

Movie.propTypes = { 
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;