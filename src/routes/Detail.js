import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title,year, summary, poster, genres } = location.state;


  useEffect(() => {
    if (location.state === null) {
      navigate('/', { replace: true });
    }
  })

  return (
    <div className='detail__container'>
      <img src={poster} />
      <h2>{title}</h2>
      <span>{summary}</span>
      <h4>Released Year: {year}</h4>
      <ul>
        <h3>Genres</h3>
        {genres.map((genre) => {
          return (
            <li>{genre}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Detail;