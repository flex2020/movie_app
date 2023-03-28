import { useEffect, useState } from "react";
import axios from 'axios';
import Movie from "./Movie";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    setIsLoading(false);
    setMovies(movies);
  }
  getMovies();
  return (
    <section className="container">
      { isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      )
      : (
        <div>
          {
          movies.map((movie) => {
            return (
              <Movie 
                key={movie.id}
                id={movie.id} 
                title={movie.title} 
                year={movie.year} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} />
            );
            })
          }
        </div>
      )}
    </section>
  );
}

export default App;
