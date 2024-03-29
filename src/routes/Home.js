import { useState } from "react";
import axios from 'axios';
import Movie from "../components/Movie";
import './Home.css';

function Home() {
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
        <div className="movies">
          {
          movies.map((movie) => {
            return (
              <Movie 
                key={movie.id}
                id={movie.id} 
                title={movie.title} 
                year={movie.year} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres} />
            );
            })
          }
        </div>
      )}
    </section>
  );
}

export default Home;
