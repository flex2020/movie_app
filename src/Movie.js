import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({ title, year, summary, poster }) => {
  return (
    <div className='movie'>
      <img src={poster} />
      <div className='movie__data'>
        <h3 className='movie__title'>{title}</h3>
        <h5 className='movie__year'>{year}</h5>
        <p className='movie_summary'>{summary}</p>
      </div>
    </div>
    
  );
};

Movie.propTypes = { 
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;