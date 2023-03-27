import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  setTimeout(() => {
    setIsLoading(false);
  }, 6000);

  return (
    <div>
      { isLoading ? 'Loading...' : 'We are ready.' }
    </div>

  );
}

export default App;
